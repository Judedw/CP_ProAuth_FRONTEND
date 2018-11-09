// -------- JA Sprint 1 - MVP --------
// --------- Buddhi Hasanka ----------

import { Component, OnInit, OnDestroy } from "@angular/core";
import { EvoteService } from "../evote-service.service";
import { Subscription } from "../../../../../node_modules/rxjs";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import {
  MatDialogRef,
  MatDialog,
  DateAdapter
} from "../../../../../node_modules/@angular/material";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";

import * as moment from "moment";
import { AppFileDownloadService } from "../../../shared/services/file-download.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { EvotePopupComponent } from "../../evote/evote-table/evote-popup/evote-popup.component";
import { VoterPopupComponent } from "../voter-popup/voter-popup.component";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { CrudService } from "../../cruds/crud.service";

@Component({
  selector: "app-evote-table",
  templateUrl: "./evote-table.component.html",
  animations: egretAnimations
})
export class EvoteTableComponent implements OnInit, OnDestroy {
  rows: any[];
  columns = [];
  temp = [];

  // pagination
  pageNumber = 1;
  pageSize = 10;
  totalPages = [];
  totalRecords = 0;

  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;

  public getEvoteSub: Subscription;
  constructor(
    private evoteService: EvoteService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private downloadService: AppFileDownloadService,
    private conversionService: AppDataConversionService,
    private dialog: MatDialog,
    private clientService: CrudService
  ) {}

  ngOnInit() {
    // this.getAllEvote();
    this.getPageEvote(this.pageNumber);
    this.getClientSuggestions();
  }

  downloadCsv(selectedRow) {
    console.log("SELECTED RAW : " + selectedRow.id);
    this.evoteService
      .getEvoteDetails(selectedRow.id)
      .subscribe(successResp => {
        let auths = successResp.content;
        const fileName =
          selectedRow.topic +
          "_" +
          selectedRow.code +
          "_" +
          selectedRow.batchNumber;
        const csvData = this.conversionService.convertToCsv(auths);

        this.downloadService.downloadFile({
          name: fileName,
          type: "csv",
          data: csvData
        });
      });
  }

  ngOnDestroy() {
    if (this.getClientSub) {
      this.getClientSub.unsubscribe();
    }
  }

  // downloadCsv(selectedRow) {
  //   const fileName  =  selectedRow.topic + '_' + selectedRow.code + '_' + selectedRow.batchNumber;
  //   const csvData =  this.conversionService.convertToCsv(selectedRow.productDetails);
  //   this.downloadService.downloadFile({ name: fileName, type : 'csv' , data : csvData });
  // }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    let columns = Object.keys(this.temp[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) return;

    const rows = this.temp.filter(function(data) {
      for (let i = 0; i <= columns.length; i++) {
        let column = columns[i];
        if (
          data[column] &&
          data[column]
            .toString()
            .toLowerCase()
            .indexOf(val) > -1
        ) {
          return true;
        }
      }
    });
    this.rows = rows;
  }

  getClientSuggestions() {
    this.getClientSub = this.clientService
      .getClientSuggestions()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
        console.log(this.clients);
      });
  }

  getAllEvote() {
    this.getEvoteSub = this.evoteService.getAllEvotes().subscribe(
      successResp => {
        this.rows = successResp.content;
        this.totalRecords = successResp.pagination.totalRecords;
      },
      error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  // --------- BH ----------
  getPageEvote(pageNumber) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.getEvoteSub = this.evoteService.getPageEvotes(pageNumber, this.pageSize).subscribe(
        successResp => {
          this.rows = this.temp = successResp.content;
          let totalPages = successResp.pagination.totalPages;
          let totalPagesArray = [];

          if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
              totalPagesArray.push(i);
            }
          }
          this.totalPages = totalPagesArray;
          this.totalRecords = successResp.pagination.totalRecords;

        },
        error => {
          this.loader.close();
          console.log(error);
          console.log(error.status);
          this.errDialog.showError({
            title: "Error",
            status: error.status,
            type: "http_error"
          });
        }
      );
    }
  }

  changeValue() {
    this.pageNumber = 1;
    this.getPageEvote(this.pageNumber);
  }
  // --------- BH ----------


  deleteEvote(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.description}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.evoteService.removeEvotes(row, this.rows).subscribe(
            data => {
              this.getAllEvote();
              this.loader.close();
            },
            error => {
              this.loader.close();
              this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
              });
            }
          );
        }
      });
  }

  openEvotePopup(data: any = {}, isNew?) {
    let title = isNew ? "Add New E-Vote" : "Update E-Vote";
    let dialogRef: MatDialogRef<any> = this.dialog.open(EvotePopupComponent, {
      width: "720px",
      disableClose: true,
      data: { title: title, payload: data, isNew: isNew }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      this.loader.open();

      if (isNew) {
        this.evoteService.addEvote(res, this.rows).subscribe(
          data => {
            this.rows = data;
            this.loader.close();
          },
          error => {
            this.loader.close();
            let backEndError = error.error.validationFailures[0].field;

            console.log(backEndError);

            if (backEndError == "eVote") {
              this.errDialog.showError({
                title: "Client Error !",
                clientError: " Voters are not exists for entered batch number !",
                type: "client_error"
              });
            } else {
              this.errDialog.showError({
                title: "Error",
                status: error.status,
                type: "http_error"
              });
            }
          }
        );
      } else {
        this.evoteService.updateEvote(data.id, res).subscribe(
          response => {
            console.log(response.content);
            this.rows = this.rows.map(i => {
              if (i.id === data.id) {
                return Object.assign({}, i, response.content);
              }
              return i;
            });

            this.loader.close();
            return this.rows.slice();
          },
          error => {
            this.loader.close();
            this.errDialog.showError({
              title: "Error",
              status: error.status,
              type: "http_error"
            });
          }
        );
      }
    });
  }

  openVoterPopup(data: any = {}) {
    let title = "Populate Voters ";
    let dialogRef: MatDialogRef<any> = this.dialog.open(VoterPopupComponent, {
      width: "400px",
      disableClose: true,
      data: { title: title, payload: data }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }

      this.evoteService.populateVoters(res).subscribe(
        response => {
        },
        error => {
          this.loader.close();
          this.errDialog.showError({
            title: "Error",
            status: error.status,
            type: "http_error"
          });
        }
      );
    });
  }
}

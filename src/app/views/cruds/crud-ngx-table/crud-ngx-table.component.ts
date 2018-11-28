// -------- JA Sprint 1 - MVP --------
// --------- Buddhi Hasanka ----------

import { Component, OnInit, OnDestroy } from "@angular/core";
import { CrudService } from "../crud.service";
import { MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { NgxTablePopupComponent } from "./ngx-table-popup/ngx-table-popup.component";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { Client } from "../user.model";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";

@Component({
  selector: "app-crud-ngx-table",
  templateUrl: "./crud-ngx-table.component.html",
  animations: egretAnimations
})
export class CrudNgxTableComponent implements OnInit, OnDestroy {

  public items: any[];

  // pagination
  pageNumber = 1;
  pageSize = 10;
  totalPages = [];
  totalRecords = 0;

  public getItemSub: Subscription;
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private crudService: CrudService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) { }

  ngOnInit() {
    // this.getItems();
    this.getPageItems(this.pageNumber);
  }
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe();
    }
  }
  getItems() {
    this.getItemSub = this.crudService.getItems().subscribe(
      successResp => {
        this.items = successResp.content;
      },
      error => {
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  // --------- BH ----------
  getPageItems(pageNumber) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.getItemSub = this.crudService.getPageItems(pageNumber, this.pageSize).subscribe(
        successResp => {
          this.items = successResp.content;
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
    this.getPageItems(this.pageNumber);
  }
  // --------- BH ----------

  

  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? "Add new client" : "Update client";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      NgxTablePopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data }
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // If user press cancel
        return;
      }
      this.loader.open();
      if (isNew) {
        this.crudService.addItem(res, this.items).subscribe(
          response => {
            this.items = response;
            this.loader.close();
            this.snack.open("New client added !", "OK", { duration: 4000 });
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
      } else {
        this.crudService.updateItem(data.id, res).subscribe(
          response => {
            this.items = this.items.map(i => {
              if (i.id === data.id) {
                return Object.assign({}, i, response.content);
              }
              return i;
            });
            this.loader.close();
            this.snack.open("Client Updated!", "OK", { duration: 4000 });
            return this.items.slice();
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
  deleteItem(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.crudService.removeItem(row.id).subscribe(
            data => {
              console.log(row);
              console.log(this.items[0]);
              let i = this.items.indexOf(row);
              this.items.splice(i, 1);
              this.loader.close();
              this.snack.open("Client deleted!", "OK", { duration: 4000 });
              return this.items.slice();
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
}

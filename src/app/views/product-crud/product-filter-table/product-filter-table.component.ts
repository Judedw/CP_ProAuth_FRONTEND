import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductCrudService } from "../product-crud.service";
import {
  MatDialogRef,
  MatDialog,
  DateAdapter
} from "../../../../../node_modules/@angular/material";
import { ProductCrudPopupComponent } from "./product-crud-popup/product-crud-popup.component";

import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { Subscription } from "../../../../../node_modules/rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";

import * as moment from "moment";
import { AppFileDownloadService } from "../../../shared/services/file-download.service";
import { AppDataConversionService } from '../../../shared/services/data-conversion.service';

@Component({
  selector: "app-product-filter-table",
  templateUrl: "./product-filter-table.component.html",
  animations: egretAnimations
})
export class ProductFilterTableComponent implements OnInit, OnDestroy {
  rows: any[];
  columns = [];
  temp = [];
  public getProductsSub: Subscription;

  constructor(
    private prodService: ProductCrudService,
    private dialog: MatDialog,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private downloadService: AppFileDownloadService,
    private conversionService : AppDataConversionService
  ) {}

  ngOnInit() {
    this.getAllProduct();
  }

  ngOnDestroy() {
    if (this.getProductsSub) {
      this.getProductsSub.unsubscribe();
    }
  }

  downloadCsv(selectedRow) {
    const fileName  =  selectedRow.name + '_' + selectedRow.code + '_' + selectedRow.batchNumber;
    const csvData =  this.conversionService.convertToCsv(selectedRow.productDetails);
    this.downloadService.downloadFile({ name: fileName, type : 'csv' , data : csvData });
  }

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

  getAllProduct() {
    this.getProductsSub = this.prodService.getAllProducts().subscribe(
      successResp => {
        this.rows = this.temp = successResp.content;
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

  deleteProduct(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.description}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.prodService.removeProduct(row, this.rows).subscribe(
            data => {
              this.rows = data;
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

  openProductPopup(data: any = {}, isNew?) {
    let title = isNew ? "Add new Product" : "Update Product";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      ProductCrudPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      this.loader.open();

      console.log("RES obj :");
      console.log(res);

      res.expireDate = moment(res.expireDate).format("YYYY-MM-DD");

      if (isNew) {
        this.prodService.addProduct(res, this.rows).subscribe(
          data => {
            this.rows = data;
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
      } else {
        this.prodService.updateProduct(data.id, res).subscribe(
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
}

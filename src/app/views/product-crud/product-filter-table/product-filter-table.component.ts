import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductCrudService } from "../product-crud.service";
import { MatDialogRef, MatDialog, DateAdapter } from "@angular/material";
import { ProductCrudPopupComponent } from "./product-crud-popup/product-crud-popup.component";

import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { Subscription } from "rxjs";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";

import * as moment from "moment";
import { AppFileDownloadService } from "../../../shared/services/file-download.service";
import { AppDataConversionService } from "../../../shared/services/data-conversion.service";
import { Content } from "../../../model/ClientModel.model";

@Component({
  selector: "app-product-filter-table",
  templateUrl: "./product-filter-table.component.html",
  animations: egretAnimations
})
export class ProductFilterTableComponent implements OnInit, OnDestroy {
  rows: any[];
  columns = ["Product Code", "Product Name", "Description", "Batch Number", "Quantity", "Expire Date", "Actions"];
  temp = [];

  pageNumber = 1;
  pageSize = 10;
  totalPages = [];
  totalRecords = 0;

  // pagination


  public getProductsSub: Subscription;
  updatable: boolean;

  constructor(
    private prodService: ProductCrudService,
    private dialog: MatDialog,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService,
    private downloadService: AppFileDownloadService,
    private conversionService: AppDataConversionService
  ) { }

  ngOnInit() {
    this.getPageProduct(this.pageNumber);
  }

  ngOnDestroy() {
    if (this.getProductsSub) {
      this.getProductsSub.unsubscribe();
    }
  }

  downloadCsv(selectedRow) {
    console.log("SELECTED RAW : " + selectedRow.id);
    this.prodService
      .getProductDetails(selectedRow.id)
      .subscribe(successResp => {
        let auths = successResp.content;
        const fileName =
          selectedRow.name +
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    let columns = Object.keys(this.temp[0]);
    columns.splice(columns.length - 1);

    if (!columns.length) return;

    const rows = this.temp.filter(function (data) {
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
        console.log(this.rows);
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

  getPageProduct(pageNumber) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.getProductsSub = this.prodService.getPageProducts(pageNumber, this.pageSize).subscribe(
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
    this.getPageProduct(this.pageNumber);

  }

  deleteProduct(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.name}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.prodService.removeProduct(row, this.rows).subscribe(
            data => {
              this.getAllProduct();
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
        data: { title: title, payload: data, isNew: isNew }
      }
    );

    console.log("RES data :");
    console.log(data);

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        // if user press cancel.
        return;
      }
      this.loader.open();

      console.log("RES obj :");
      console.log(res);

      //res.expireDate = moment(res.expireDate).format("YYYY-MM-DD");

      if (isNew) {
        this.prodService.addProduct(res, this.rows).subscribe(
          data => {
            let id = data;
            this.prodService.getProductById(id).subscribe(data => {
              this.rows = this.rows.concat(data.content);
              console.log(this.rows);
            });

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
            this.prodService
              .getProductById(response.content.id)
              .subscribe(data => {
                this.rows = this.rows.map(i => {
                  if (i.id === data.content.id) {
                    console.log("recent obj " + JSON.stringify(data.content));
                    return Object.assign({}, i, data.content);
                  }
                  return i;
                });
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

  // getProductById(productId) {
  //   this.prodService.getProductById(productId).subscribe(
  //     response => {
  //       this.recentProduct = response.content;
  //       console.log(
  //         "recent product obj : " + JSON.stringify(this.recentProduct)
  //       );
  //     },
  //     error => {
  //       this.loader.close();
  //       this.errDialog.showError({
  //         title: "Error",
  //         status: error.status,
  //         type: "http_error"
  //       });
  //     }
  //   );
  // }
}


export class CSVDTO {
  productDetails: any;
  authenticationCode: any;

  constructor(public proDetails: any, public authCodes: any) { }
}

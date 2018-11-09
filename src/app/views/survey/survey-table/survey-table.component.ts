// -------- JA Sprint 1 - MVP --------
// --------- Buddhi Hasanka ----------

import { Component, OnInit, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { SurveyCreationPopupComponent } from "../survey-creation-popup/survey-creation-popup.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { LayoutService } from "../../../shared/services/layout.service";
import { NavigationExtras, Router } from "@angular/router";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import * as moment from "moment";
import { SurveyService } from "../survey.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { Subscription } from "rxjs";
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";

@Component({
  selector: "app-survey-table",
  templateUrl: "./survey-table.component.html",
  animations: egretAnimations
})
export class SurveyTableComponent implements OnInit, OnDestroy {
  rows: any[];
  getSurveysSub: Subscription;
  typeMap: Map<string, string>;

  // pagination
  pageNumber = 1;
  pageSize = 10;
  totalPages = [];
  totalRecords = 0;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private surveyService: SurveyService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private confirmService: AppConfirmService
  ) { }

  ngOnInit() {
    // this.getAllSurvey();
    this.getPageSurvey(this.pageNumber);
  }

  ngOnDestroy() {
    if (this.getSurveysSub) {
      this.getSurveysSub.unsubscribe();
    }
  }

  onDetailToggle(value) {
    console.log("cliecked : " + value);
  }

  openSurveyPopup(data: any = {}, isNew?) {
    let title = isNew ? "Add New Survey " : "Update Survey ";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      SurveyCreationPopupComponent,
      {
        width: "720px",
        disableClose: true,
        data: { title: title, payload: data }
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      this.loader.open();

      res.startDate = moment(res.startDate).format("YYYY-MM-DD");
      res.endDate = moment(res.endDate).format("YYYY-MM-DD");

      console.log("INPUT : ");
      console.log(JSON.stringify(res));

      if (isNew) {
        this.surveyService.addNewSurvey(res, this.rows).subscribe(
          data => {
            this.rows = data;
            console.log("survey response : ");
            console.log(this.rows);
            this.navigateSurveyBuilder(this.rows[0]);
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
        this.surveyService.updateSurveyPopup(data.id, res).subscribe(
          response => {
            this.loader.close();
            this.getSurveysSub = this.surveyService
              .getAllSurveys()
              .subscribe(successResp => {
                this.rows = successResp.content;
              });
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

  deleteSurvey(row) {
    this.confirmService
      .confirm({ message: `Delete ${row.topic}?` })
      .subscribe(res => {
        if (res) {
          this.loader.open();
          this.surveyService.removeSurvey(row, this.rows).subscribe(
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

  getAllSurvey() {
    this.getSurveysSub = this.surveyService.getAllSurveys().subscribe(
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
  getPageSurvey(pageNumber) {
    if (pageNumber === 1 || (0 < pageNumber && pageNumber <= this.totalPages.length)) {
      this.pageNumber = pageNumber;

      this.getSurveysSub = this.surveyService.getPageSurveys(pageNumber, this.pageSize).subscribe(
        successResp => {
          this.rows = successResp.content;
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
    this.getPageSurvey(this.pageNumber);
  }
  // --------- BH ----------

  navigateSurveyBuilder(res: any) {
    console.log("navigation method : ");
    console.log(res.questions);
    let extraParam: NavigationExtras = {
      queryParams: {
        id: res.id,
        name: res.topic,
        type: res.type,
        productId: res.productId,
        voteId: res.voteId,
        startDate: res.startDate,
        endDate: res.endDate,
        questions: JSON.stringify(res.questions)
      }
    };

    this.router.navigate(["surveys/builder_v1"], extraParam);
  }

  getTypeValue(key: string): string {
    if (!this.typeMap) {
      this.typeMap = new Map<string, string>();
      this.typeMap.set("P", "Product Survey");
      this.typeMap.set("V", "Evote Survey");
    }
    return this.typeMap.get(key);
  }
}

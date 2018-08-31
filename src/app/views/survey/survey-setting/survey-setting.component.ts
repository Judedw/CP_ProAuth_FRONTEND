import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MatDialog, MatDialogRef } from "@angular/material";
import { AnswerTemplatePopupComponent } from "../answer-template-popup/answer-template-popup.component";

@Component({
  selector: "app-survey-setting",
  templateUrl: "./survey-setting.component.html",
  animations: egretAnimations
})
export class SurveySettingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  answerTemplates = [
    {
      name: "Dichotomous Survey Questions",
      type: "Yes/No"
    },
    {
      name: "Multiple Choice answers",
      type: "mcq"
    }
  ];

  ngOnInit() {}

  openAnswerTemplatePopup(data: any = {}, isNew?) {
    let title = isNew ? "Add New Answer Template " : "Update Answer Template ";
    let dialogRef: MatDialogRef<any> = this.dialog.open(
      AnswerTemplatePopupComponent,
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

      console.log("input : ");

      console.log(JSON.stringify(res));
    });
  }
}

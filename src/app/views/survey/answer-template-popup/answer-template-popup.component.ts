import { Component, OnInit, Input, Inject } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-answer-template-popup",
  templateUrl: "./answer-template-popup.component.html",
  animations: egretAnimations
})
export class AnswerTemplatePopupComponent implements OnInit {
  public ansTemplateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AnswerTemplatePopupComponent>,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildAnsTemplateform(this.data.payload);
    this.hideRemoveButton();
  }

  buildAnsTemplateform(fieldItem) {
    this.ansTemplateForm = this.fb.group({
      name: [fieldItem.name || ""],
      answerTemplateType: [fieldItem.answerTemplateType || ""],
      answers: this.fb.array([this.initAnswerTemplate(fieldItem)])
    });
  }

  initAnswerTemplate(fieldItem: any = {}) {
    return this.fb.group({
      lable: ["test"],
      value: ["test"],
      option: ["test"]
    });
  }

  addAnsTemplate() {
    const answer = <FormArray>this.ansTemplateForm.controls["answers"];
    answer.push(this.initAnswerTemplate());
  }

  removeAnsTemplate(index : number) {
    const answer = <FormArray>this.ansTemplateForm.controls["answers"];
    answer.removeAt(index);
  }

  hideRemoveButton() {
    return this.ansTemplateForm.controls["answers"].value.length > 1;
  }

  submit() {
    this.dialogRef.close(this.ansTemplateForm.value);
  }
}

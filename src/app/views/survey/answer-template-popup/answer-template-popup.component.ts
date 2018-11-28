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
  selectedAnsType: string;
  ansTemplateArray: FormArray;
  selectedFileList = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AnswerTemplatePopupComponent>,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildAnsTemplateform(this.data.payload);
    this.selectedAnsType = this.data.payload.answerTemplateType;
    this.hideRemoveButton();
  }

  buildAnsTemplateform(fieldItem) {
    this.ansTemplateForm = this.fb.group({
      name: [fieldItem.name || ""],
      answerTemplateType: [fieldItem.answerTemplateType || ""],
      answers: this.fb.array([])
    });
    this.patch(fieldItem.answers);
  }


testAnswerGroup(){
  return this.fb.group({
    lable: [],
    value: [],
    optionNumber: []
  });
}



  patch(fields?) {
    const control = <FormArray>this.ansTemplateForm.controls["answers"];
    this.ansTemplateArray = control;
    if (!fields) {
      control.push(this.initAnswerTemplate());
      return;
    }
    fields.forEach(x => {
      control.push(this.initAnswerTemplate(x.lable, x.value, x.optionNumber));
    });
  }

  initAnswerTemplate(lable?, value?, optionNumber?) {
    console.log(" SET " + lable + " : " + value + " : " + optionNumber);
    return this.fb.group({
      lable: [lable || ""],
      value: [value + "" || ""],
      optionNumber: [optionNumber + "" || ""]
    });
  }

  addAnsTemplate() {
    const answer = <FormArray>this.ansTemplateForm.controls["answers"];
    answer.push(this.initAnswerTemplate());
  }

  removeAnsTemplate(index: number) {
    const answer = <FormArray>this.ansTemplateForm.controls["answers"];
    answer.removeAt(index);
  }

  hideRemoveButton() {
    return this.ansTemplateForm.controls["answers"].value.length > 1;
  }

  submit() {
    console.log(JSON.stringify(this.ansTemplateForm.value));
    this.dialogRef.close(this.ansTemplateForm.value);
  }

  answerTypes = [
    // {
    //   name: "Free Text",
    //   value: "F"
    // },
    {
      name: "Multiple Options",
      value: "M"
    },
    {
      name: "Single Option",
      value: "S"
    }
  ];
}







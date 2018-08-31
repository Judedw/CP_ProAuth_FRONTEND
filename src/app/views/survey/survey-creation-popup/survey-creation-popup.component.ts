import { Component, OnInit, Inject } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: "app-survey-creation-popup",
  templateUrl: "./survey-creation-popup.component.html",
  animations: egretAnimations
})
export class SurveyCreationPopupComponent implements OnInit {
  public surveyForm: FormGroup;
  selectedType : any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SurveyCreationPopupComponent>,
    private layout: LayoutService
  ) {}


 surveyTypes = [
    {
      name: 'Product Survey',
      value: 'product'
     },
    {
      name: 'Evote Survey',
      value: 'evote'
    }
  ];



  ngOnInit() {
    this.buildSurveyForm(this.data.payload);
    this.selectedType = this.data.payload.type;
    if(this.data.payload.type === this.surveyTypes[0]){
      console.log('equals')
    }
    console.log(this.surveyTypes[0])
    console.log(this.data.payload.type);
  }

  buildSurveyForm(fieldItem) {
    this.surveyForm = this.fb.group({
      name: [fieldItem.topic || ""],
      surveyType : [fieldItem.type || ""]
    });
  }

  submit(){
    this.layout.publishLayoutChange({
      sidebarStyle: "closed"
    });
    this.dialogRef.close(this.surveyForm.value);
  }

}

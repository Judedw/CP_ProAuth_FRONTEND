import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
  MatSnackBar
} from "../../../../../../node_modules/@angular/material";
import { Subscription } from "../../../../../../node_modules/rxjs";
import { EvoteService } from "../../evote-service.service";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { CrudService } from "../../../cruds/crud.service";
import { ResponseModel } from "../../../../model/ResponseModel.model";
import { FileUploader } from "ng2-file-upload";
import * as moment from "moment";
import { SurveyService } from '../../../survey/survey.service';
import { DateValidator } from "app/utility/dateValidator";
import { environment } from 'environments/environment.prod';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD"
  },
  display: {
    dateInput: "YYYY-MM-DD",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: "app-evote-popup",
  templateUrl: "./evote-popup.component.html",
  animations : egretAnimations,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class EvotePopupComponent implements OnInit {
  public evoteForm: FormGroup;
  public getClientSub: Subscription;
  public response: ResponseModel;
  tomorrow: Date;
  public clients: any[];
  imageFile: File;

  // image uploader related properties
  public uploader: FileUploader = new FileUploader({ url: "upload_url" });
  public hasBaseDropZoneOver: boolean = false;
  imageObject: any;
  imageUrl: any = "assets/images/placeholder.jpg";

  //------- new --------
  maxUploadableFileCount: number = null; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
  urls = [];
  newlySelectedFileList = [];
  remainImagesID = []
  currentTotalImageCount: number = 0;



  getAllSurveySub: Subscription;
  surveyRows: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private evoteService: EvoteService,
    private clientService: CrudService,
    private surveyService: SurveyService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EvotePopupComponent>

  ) { }

  ngOnInit() {


    if (!this.data.isNew) {
      console.log("---------- IN -------------");
      let images: any[] = this.data.payload.imageObjects;
      images.forEach(image => {
        let img = environment.evoteimageUrl + "downloadFile/" + image.id;
        this.remainImagesID.push(image.id);
        this.urls.push(img);
      });

      this.currentTotalImageCount = this.remainImagesID.length;
    }

    this.getAllSurvey();
    this.tomorrow = DateValidator.getTomorrow();
    this.buildEvoteForm(this.data.payload);
    this.getClientSuggestions();
    this.getAllSurvey();
    // console.log(this.data.payload);
  }

  getClientSuggestions() {
    this.getClientSub = this.clientService
      .getClientSuggestions()
      .subscribe(data => {
        this.response = data;
        this.clients = this.response.content;
      });
  }

  // image uploader related functions from here
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  // --------- Old Code -----------------

  // onSelectFile(event) {
  //   let x = this.uploader.queue.length - 1;
  //   this.imageObject = this.uploader.queue[x];

  //   let reader = new FileReader();
  //   if (event.target.files && event.target.files.length > 0) {
  //     this.imageFile = event.target.files[0];
  //     reader.readAsDataURL(this.imageFile);
  //     reader.onload = (event: any) => {
  //       this.imageUrl = event.target.result;
  //       console.log("IMAGE URL  : " + this.imageUrl);
  //     };
  //   }
  // }


// --------- New Code -----------------
  // File uploader validation and upload
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      if (
        this.maxUploadableFileCount == null || this.maxUploadableFileCount < 1
          ? true
          : this.currentTotalImageCount + filesAmount <=
          this.maxUploadableFileCount
      ) {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();

          reader.onload = (event: any) => {
            this.urls.push(event.target.result);
          };

          reader.readAsDataURL(event.target.files[i]);
          this.newlySelectedFileList.push(event.target.files[i]);
        }
        this.currentTotalImageCount += filesAmount;
      } else {
        // alert for file uploa limit
        this.snackBar.open(
          "Can't upload more than " + this.maxUploadableFileCount + " photos",
          "close",
          { duration: 2000 }
        );
      }

    }
  }


  removeSelectedImg(index: number) {
    console.log("remove -- " + index);
    console.log("remainImagesID.length -- " +this.remainImagesID.length);
    console.log("remove -- " + index);
    this.urls.splice(index, 1);
    this.currentTotalImageCount -= 1;

    if (this.remainImagesID.length < index + 1) {
      this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    } else {
      this.remainImagesID.splice(index,1);
    }
  }





  buildEvoteForm(fieldItem) {
    this.evoteForm = this.fb.group({
      topic: [fieldItem.topic || "", Validators.required],
      clientId: [fieldItem.clientId || "",{disabled: !this.data.isNew}],
      code: [fieldItem.code || "", Validators.required],
      description: [fieldItem.description || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required],
      surveyId: [fieldItem.surveyId || null],
      file: [fieldItem.file || ""]
    });
  }
  submit() {
    console.log("PRODUCT FORM VALUES ");
    console.log(this.evoteForm.value);

    let evoteRequest: EvoteCreationRequest = new EvoteCreationRequest(
      this.evoteForm.value
    );

    console.log("EVOTE CreationRequest" + JSON.stringify(evoteRequest));

    let formData;

    console.log("NEW SAVE CONTEXT");
    console.log(this.prepareToSave(evoteRequest));
    formData = this.prepareToSave(evoteRequest);

    //console.log(this.evoteForm.value)
    console.log("prepared form data ");
    console.log(formData);
    this.dialogRef.close(formData);
  }


  prepareToSave(formvalue): FormData {
    let input: FormData = new FormData();

    if (formvalue.surveyId) {
      input.append("surveyId", formvalue.surveyId);
    }

    input.append("code", formvalue.code);
    input.append("quantity", formvalue.quantity);
    input.append(
      "expireDate",
      moment(formvalue.expireDate).format("YYYY-MM-DD")
    );
    input.append("topic", formvalue.topic);
    input.append("description", formvalue.description);
    input.append("batchNumber", formvalue.batchNumber);
    input.append("clientId", formvalue.clientId.id);



    if(this.remainImagesID != null && this.remainImagesID.length > 0){
      input.append("remainImagesID", this.remainImagesID.toString());
    }

    for (let i = 0; i < this.newlySelectedFileList.length; i++) {
      let selectedFile: File = this.newlySelectedFileList[i];
      let type = selectedFile.type.split("/");
      let imageName = "image_" + i + "." + type[1];
      input.append("file", selectedFile, imageName);
    }
    return input;
  }

  getAllSurvey() {
    this.getAllSurveySub = this.surveyService
      .getAllSurveys()
      .subscribe(successResp => {
        this.surveyRows = successResp.content;
      });
  }

}




export class EvoteCreationRequest {
  code: string;
  quantity: string;
  expireDate: string;
  topic: string;
  description: string;
  batchNumber: string;
  surveyId: string;
  clientId: ClientSub;
  file: any;


  constructor(public formValue: any) {
    this.code = formValue.code;
    this.quantity = formValue.quantity;
    this.expireDate = formValue.expireDate;
    this.topic = formValue.topic;
    this.description = formValue.description;
    this.batchNumber = formValue.batchNumber;
    this.surveyId = formValue.surveyId;
    this.clientId = new ClientSub(formValue.clientId);
    this.file = formValue.file;

  }
}

class ClientSub {
  constructor(public id: string) { }
}

import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
  MatSnackBar,
  MatAutocompleteSelectedEvent
} from "@angular/material";
import { CrudService } from "../../../cruds/crud.service";
import { Subscription, Observable } from "rxjs";
import { ResponseModel } from "../../../../model/ResponseModel.model";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { debounceTime, switchMap, distinctUntilChanged, startWith, map } from "rxjs/operators";
import { Clients, Content } from "../../../../model/ClientModel.model";

import { DateValidator } from "../../../../utility/dateValidator";

import { FileUploader } from "ng2-file-upload";
import * as moment from "moment";
import { SurveyService } from "../../../survey/survey.service";
import { environment } from "environments/environment.prod";
import { egretAnimations } from '../../../../shared/animations/egret-animations';
import { ProductCommonComponent } from "../../product-crud-common.component";

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
  selector: "app-product-crud-popup",
  templateUrl: "./product-crud-popup.component.html",
  animations: egretAnimations,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class ProductCrudPopupComponent extends ProductCommonComponent implements OnInit {
  // export class ProductCrudPopupComponent implements OnInit {
  public productForm: FormGroup;
  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;
  public filteredClient: Observable<Clients>;
  tomorrow: Date;
  imageFile: File;
  imageUrl: any = "assets/images/placeholder.jpg";


  // image uploader related properties
  public uploader: FileUploader = new FileUploader({ url: "upload_url" });
  public hasBaseDropZoneOver: boolean = false;
  imageObject: any;
  //------- new --------
  maxUploadableFileCount: number = 4; // IF THIS IS NULL, THERE IS NO IMAGE LIMIT FOR FILE UPLOADER
  urls = [];
  newlySelectedFileList = [];
  remainImagesID = []
  currentTotalImageCount: number = 0;

  getAllSurveySub: Subscription;
  surveyRows: any[];

  surveyFilteredOptions: Observable<string[]>;
  surveys: string[] = [];
  surveyIDs: string[] = [];
  selectedSurveyID: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductCrudPopupComponent>,
    public clientService: CrudService,
    public surveyService: SurveyService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    super(surveyService, clientService);
  }


  ngOnInit() {

    // validate back dates
    this.tomorrow = DateValidator.getTomorrow();

    if (!this.data.isNew) {
      let images: any[] = this.data.payload.imageObjects;
      images.forEach(image => {
        let img = environment.productimageUrl + "downloadFile/" + image.id;
        this.remainImagesID.push(image.id);
        this.urls.push(img);
      });

      this.currentTotalImageCount = this.remainImagesID.length;
    }

    this.getAllSurvey();
    this.getClientSuggestions();
    this.buildProductForm(this.data.payload);
    this.filteredClient = this.productForm.get("client").valueChanges.pipe(
      debounceTime(200),
      switchMap(value => this.clientService.search({ name: value }, 1))
    );
  }

  public surveyOnChange() {
    this.surveyFilteredOptions = this.productForm.controls['surveyId'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._surveyFilter(value))
      );
    this.onSelectionChanged();
  }

  private _surveyFilter(value: string): string[] {
    if (value === "" || isNaN(Number(value))) {
      const filterValue = value.toLowerCase();
      return this.surveys.filter(option => option.toLowerCase().includes(filterValue));
    }
  }

  onSelectionChanged() {
    const input_value = this.productForm.controls['surveyId'].value;
    const id = this.surveyIDs.indexOf(input_value);

    if (id > -1) {
      this.productForm.controls['surveyId'].setValue(this.surveys[id]);
      this.selectedSurveyID = input_value;
      console.log("===================== ID: - " + this.selectedSurveyID);
      console.log("===================== Value: - " + this.surveys[id]);
    } else {
      console.log("============ else ==================");
    }
  }

  checkValue(event) {
    if (!(this.surveys.indexOf(event.currentTarget.value) > -1)) {
      this.productForm.controls['surveyId'].setValue("");
    }
  }

  getAllSurvey() {
    this.getAllSurveySub = this.surveyService
      .getAllSurveys()
      .subscribe(successResp => {
        successResp.content.forEach(element => {
          this.surveys.push(element.topic);
          this.surveyIDs.push(element.id);
          this.surveyOnChange();
        });
      });
  }

  // getAllSurvey() {
  //   this.getAllSurveySub = this.surveyService
  //     .getAllSurveys()
  //     .subscribe(successResp => {
  //       this.surveyRows = successResp.content;
  //     });
  // }

  // getAllSurvey() {
  //   this.getAllSurveySub = this.surveyService
  //     .getAllSurveys()
  //     .subscribe(successResp => {
  //       successResp.content.forEach(element => {
  //         this.surveys.push(element.topic);
  //         this.surveyIDs.push(element.id);
  //         this.surveyOnChange();
  //       });
  //     });
  // }

  // getClientSuggestions() {
  //   this.getClientSub = this.clientService
  //     .getClientSuggestions()
  //     .subscribe(data => {
  //       this.response = data;
  //       this.clients = this.response.content;
  //     });
  // }

  // getAllClients() {
  //   this.getClientSub = this.clientService.getItems().subscribe(data => {
  //     this.response = data;
  //     this.clients = this.response.content;
  //   });
  // }

  buildProductForm(fieldItem) {
    const client = fieldItem.client;
    const clientId = client ? client.id : null;


    this.productForm = this.fb.group({
      client: [clientId || "", { disabled: !this.data.isNew }],
      code: [fieldItem.code || "", Validators.required],
      name: [fieldItem.name || "", Validators.required],
      description: [fieldItem.description || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required],
      quantity: [fieldItem.quantity || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required],
      surveyId: [fieldItem.surveyId || null],
      file: [fieldItem.file || ""]
    });

  }

  submit() {
    console.log("PRODUCT FORM VALUES ");
    console.log(this.productForm.value);

    let productRequest: ProductCreationRequest = new ProductCreationRequest(
      this.productForm.value
    );

    console.log("ProductCreationRequest" + JSON.stringify(productRequest));

    let formData;

    formData = this.prepareToSave(productRequest);

    console.log("-----------  prepared form data ");
    console.log(formData);
    console.log(JSON.stringify(formData));
    this.dialogRef.close(formData);
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
    this.urls.splice(index, 1);
    this.currentTotalImageCount -= 1;

    if (this.remainImagesID.length < index + 1) {
      this.newlySelectedFileList.splice(index - this.remainImagesID.length, 1);
    } else {
      this.remainImagesID.splice(index, 1);
    }
  }

  prepareToSave(formvalue): FormData {
    console.log("--------------- newlySelectedFileList ------------------");
    console.log(this.newlySelectedFileList);
    console.log("--------------- newlySelectedFileList ------------------");
    let input: FormData = new FormData();
    if (formvalue.surveyId) {
      input.append("surveyId", this.selectedSurveyID);
    }
    console.log("========================" + formvalue.surveyId);


    input.append("file", this.imageFile);
    input.append("code", formvalue.code);
    input.append("quantity", formvalue.quantity);
    input.append("client", formvalue.client.id);
    input.append(
      "expireDate",
      moment(formvalue.expireDate).format("YYYY-MM-DD")
    );

    input.append("name", formvalue.name);
    input.append("description", formvalue.description);
    input.append("batchNumber", formvalue.batchNumber);

    if (this.remainImagesID != null && this.remainImagesID.length > 0) {
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

}

export class ProductCreationRequest {
  client: ClientSub;
  code: string;
  name: string;
  description: string;
  batchNumber: string;
  quantity: string;
  expireDate: string;
  surveyId: string;
  file: any;

  constructor(public formValue: any) {
    console.log("SURVEY ID :  " + formValue.surveyId);
    this.client = new ClientSub(formValue.client);
    this.code = formValue.code;
    this.name = formValue.name;
    this.description = formValue.description;
    this.batchNumber = formValue.batchNumber;
    this.quantity = formValue.quantity;
    this.expireDate = formValue.expireDate;
    this.surveyId = formValue.surveyId;
    this.file = formValue.file;
  }
}

class ClientSub {
  constructor(public id: string) { }
}

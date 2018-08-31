import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE
} from "../../../../../../node_modules/@angular/material";
import { CrudService } from "../../../cruds/crud.service";
import { Subscription } from "../../../../../../node_modules/rxjs";
import { ResponseModel } from "../../../../model/ResponseModel.model";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { debounceTime, switchMap}from 'rxjs/operators';
import { Clients,Content } from './../../../../model/ClientModel.model';
import {Observable} from 'rxjs/observable';
import { DateValidator} from '../../../../utility/dateValidator';





import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/switchMap';
import { startWith, map } from "../../../../../../node_modules/rxjs/operators";
import { Observable } from 'rxjs/Observable';



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
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class ProductCrudPopupComponent implements OnInit {
  public productForm: FormGroup;
  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;
  public filteredClient: Observable<Clients>;
  tomorrow : Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductCrudPopupComponent>,
    private clientService: CrudService,
    private fb: FormBuilder

  ) {}

  ngOnInit() {
    //validate backdates
    this.tomorrow = DateValidator.dateValidate();

    this.getAllClients();
    this.buildProductForm(this.data.payload);

    this.filteredClient = this.productForm.get('client').valueChanges
    .pipe(
      debounceTime(200),
      switchMap(value =>
        this.clientService.search({name:value},1
        ))

    );

  }

  getClientSuggestions(){
    this.getClientSub = this.clientService.getClientSuggestions().subscribe(data =>{
      this.response = data;
      this.clients = this.response.content;
     }) }

  getAllClients() {
    this.getClientSub = this.clientService.getItems().subscribe(data => {
      this.response = data;
      this.clients = this.response.content;
    });
  }

  buildProductForm(fieldItem) {
    this.productForm = this.fb.group({
      clientName: [fieldItem.clientName || ""],
      client: [fieldItem.client || ""],
      code: [fieldItem.code || "", Validators.required],
      name: [fieldItem.name || "", Validators.required],
      description: [fieldItem.description || "", Validators.required],
      batchNumber: [fieldItem.batchNumber || "", Validators.required],
      quantity: [fieldItem.quantity || "", Validators.required],
      expireDate: [fieldItem.expireDate || "", Validators.required]
    });
  }

  submit() {
    this.dialogRef.close(this.productForm.value);
  }

}

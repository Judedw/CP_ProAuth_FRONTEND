import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductFilterTableComponent } from "./product-filter-table/product-filter-table.component";
import { RouterModule } from "../../../../node_modules/@angular/router";
import { ProductCrudRouts } from "./product-crud.routing";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatMenuModule,
  MatToolbarModule,

} from "../../../../node_modules/@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ProductCrudService } from "./product-crud.service";
import { ProductCrudPopupComponent } from "./product-filter-table/product-crud-popup/product-crud-popup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CrudService } from "../cruds/crud.service";
import { DateValidator } from "../../directives/DateValidator.directive";
import { FileUploadModule } from "ng2-file-upload";
import { SurveyService } from '../survey/survey.service';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    FileUploadModule,
    MatProgressBarModule,
    SharedModule,
    MatToolbarModule,
    FormsModule ,
    RouterModule.forChild(ProductCrudRouts)
  ],
  declarations: [
    ProductFilterTableComponent,
    ProductCrudPopupComponent,
    DateValidator
  ],
  providers: [ProductCrudService, CrudService, SurveyService],
  entryComponents: [ProductCrudPopupComponent]
})
export class ProductCrudModule { }

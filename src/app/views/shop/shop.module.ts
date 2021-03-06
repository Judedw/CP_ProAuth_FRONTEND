import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatChipsModule,
  MatTabsModule,
  MatSnackBarModule,
  MatListModule
} from "@angular/material";

import { StarRatingModule } from "angular-star-rating";

import { SharedModule } from "../../shared/shared.module";

import { ShopService } from "./shop.service";
import { ShopRoutes } from "./shop.routing";

import { FutureSurveyComponent } from "./future-survey/future-survey.component";
import { CrudService } from "../cruds/crud.service";
import { FutureSurveyViewComponent } from './future-survey-view/future-survey-view.component';
import { FutureSurveyService } from "./future-survey.service";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatListModule,
    StarRatingModule,

    RouterModule.forChild(ShopRoutes),
    SharedModule
  ],
  declarations: [FutureSurveyComponent,FutureSurveyViewComponent],
  providers: [ShopService, CrudService,FutureSurveyService]
})
export class ShopModule {}

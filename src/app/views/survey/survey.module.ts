import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SurveyComponent } from "./survey.component";
import { RouterModule } from "@angular/router";
import { SurveyRoute } from "./survey.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatHorizontalStepper,
  MatStepperModule,
  MatStepper

} from "@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SurveyTableComponent } from "./survey-table/survey-table.component";
import { SurveySettingComponent } from "./survey-setting/survey-setting.component";
import { AnswerTemplatePopupComponent } from "./answer-template-popup/answer-template-popup.component";
import { SurveyCreationPopupComponent } from "./survey-creation-popup/survey-creation-popup.component";
import { SurveyBuilderComponent } from "./survey-builder/survey-builder.component";
import { LayoutService } from "../../shared/services/layout.service";
import { SharedModule } from '../../shared/shared.module';

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
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSidenavModule,
    RouterModule.forChild(SurveyRoute),
    SharedModule,
    MatStepperModule

  ],
  declarations: [
    SurveyComponent,
    SurveyTableComponent,
    SurveySettingComponent,
    AnswerTemplatePopupComponent,
    SurveyCreationPopupComponent,
    SurveyBuilderComponent
  ],
  entryComponents: [AnswerTemplatePopupComponent, SurveyCreationPopupComponent],
  providers: []
})
export class SurveyModule {}

import { Routes } from "@angular/router";
import { SurveyComponent } from "./survey.component";
import { SurveyTableComponent } from "./survey-table/survey-table.component";
import { SurveySettingComponent } from "./survey-setting/survey-setting.component";
import { SurveyBuilderComponent } from "./survey-builder/survey-builder.component";

export const SurveyRoute: Routes = [
  {
    path: "",
    component: SurveyComponent,
    children: [
      {
        path: "summery",
        component: SurveyTableComponent,
        data: { title: "Survey Summary", breadcrumb: "Summary" }
      },
      {
        path: "setting",
        component: SurveySettingComponent,
        data: { title: "Survey Setting", breadcrumb: "Setting" }
      },
      {
        path: "builder_v1",
        component: SurveyBuilderComponent,
        data: { title: "Survey Builder", breadcrumb: "Builder" }
      }
    ]
  }
];

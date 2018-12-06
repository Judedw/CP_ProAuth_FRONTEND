import { Component } from "@angular/core";
import { ResponseModel } from "../../model/ResponseModel.model";
import { Subscription } from "rxjs";
import { SurveyService } from "../survey/survey.service";
import { CrudService } from "../cruds/crud.service";


// -----------------------------------------
// Product Crud Common Function and Operator
// -----------------------------------------


@Component({
    selector: "product-common",
    template: ""
})
export class ProductCommonComponent {
    public clients: any[];
    public getClientSub: Subscription;
    public response: ResponseModel;

    getAllSurveySub: Subscription;
    surveyRows: any[];

    constructor(
        public surveyService: SurveyService,
        public clientService: CrudService,
    ) { }


    //   getAllSurvey() {
    //     this.getAllSurveySub = this.surveyService
    //       .getAllSurveys()
    //       .subscribe(successResp => {
    //         this.surveyRows = successResp.content;
    //       });
    //   }


    getClientSuggestions() {
        this.getClientSub = this.clientService
            .getClientSuggestions()
            .subscribe(data => {
                this.response = data;
                this.clients = this.response.content;
            });
    }

    getAllClients() {
        this.getClientSub = this.clientService.getItems().subscribe(data => {
            this.response = data;
            this.clients = this.response.content;
        });
    }


}

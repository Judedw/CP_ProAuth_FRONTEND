import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import * as SurveyEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { CrudService } from "../../cruds/crud.service";
import { Subscription } from "rxjs";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { FutureSurveyService } from "../future-survey.service";
import { NavigationExtras, Router, ActivatedRoute } from "@angular/router";

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);

var CkEditor_ModalEditor = {
  afterRender: function(modalEditor, htmlElement) {
    var editor = window["CKEDITOR"].replace(htmlElement);
    editor.on("change", function() {
      modalEditor.editingValue = editor.getData();
    });
    editor.setData(modalEditor.editingValue);
  },
  destroy: function(modalEditor, htmlElement) {
    var instance = window["CKEDITOR"].instances[htmlElement.id];
    if (instance) {
      instance.removeAllListeners();
      window["CKEDITOR"].remove(instance);
    }
  }
};
SurveyEditor.SurveyPropertyModalEditor.registerCustomWidget(
  "html",
  CkEditor_ModalEditor
);

@Component({
  selector: "app-future-survey",
  templateUrl: "./future-survey.component.html"
})
export class FutureSurveyComponent implements OnInit {
  editor: SurveyEditor.SurveyEditor;
  public clients: any[];
  public getClientSub: Subscription;
  public response: ResponseModel;
  sub: any;

  jsonContent: any;

  constructor(
    private clientService: CrudService,
    private furureSurveyService: FutureSurveyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Output()
  surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.jsonContent = params["jsonContent"];
    });

    this.setuptheme();
    this.setClients();
  }

  setClients() {
    this.getClientSub = this.clientService.getItems().subscribe(data => {
      this.response = data;
      this.clients = this.response.content;

      let noneClients = [{ value: "none", text: "none" }];
      let newClients = [];

      for (let i = 0; i < this.clients.length; i++) {
        newClients.push({
          value: this.clients[i].id,
          text: this.clients[i].name
        });
      }
      let fullClients = [];
      fullClients = noneClients.concat(newClients);

      SurveyKo.JsonObject.metaData.addProperty("survey", {
        name: "clientId",
        choices: fullClients
      });

      this.setupProperty();
      this.loadSurveyEditor();
    });
  }

  setupProperty() {
    SurveyKo.JsonObject.metaData.addProperty(
      "questionbase",
      "popupdescription:text"
    );
    SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");
    SurveyKo.JsonObject.metaData.addProperty("questionbase", "questionId");
    SurveyKo.JsonObject.metaData.findProperty(
      "questionbase",
      "questionId"
    ).readOnly = true;

    //SurveyEditor.StylesManager.applyTheme("winterstone");
  }

  loadSurveyEditor() {
    let editorOptions = {
      showEmbededSurveyTab: true,
      generateValidJSON: true,
      questionTypes: [
        "text",
        "checkbox",
        "radiogroup",
        "dropdown",
        "imagepicker",
        "matrix",
        "rating",
        "comment",
        "panel"
      ]
    };
    this.editor = new SurveyEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );

    let removeItems: string[] = [
      "editor",
      "sortablelist",
      "nouislider",
      "bootstrapslider"
    ];

    removeItems.forEach(item => {
      this.editor.toolbox.removeItem(item);
    });

    var questionCounter = 1;
    //Set the name property different from the default value
    //and set the tag property to a generated GUID value.
    this.editor.onQuestionAdded.add(function(sender, options) {
      var q = options.question;
      var d = q.surveyValue.currentPageValue.name;
      var t = q.getType();
      //q.name = "Question" + t[0].toUpperCase() + t.substring(1) + questionCounter;
      q.questionId =
      d + "Q" + t[0].toUpperCase() + t.substring(1) + questionCounter;
      questionCounter++;
    });

    if (this.jsonContent) {
      let js: any = JSON.parse(this.jsonContent);
      this.editor.text = js;
    }

    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  setuptheme() {
    var mainColor = "#0684C0";
    var mainHoverColor = "#5DAAD2";
    var textColor = "#4a4a4a";
    var headerColor = "#b7b7b7";
    var headerBackgroundColor = "#000000";
    var bodyContainerBackgroundColor = "#f8f8f8";

    var defaultThemeColorsSurvey =
      SurveyKo.StylesManager.ThemeColors["default"];
    defaultThemeColorsSurvey["$main-color"] = mainColor;
    defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
    defaultThemeColorsSurvey["$text-color"] = textColor;
    defaultThemeColorsSurvey["$header-color"] = headerColor;
    defaultThemeColorsSurvey[
      "$header-background-color"
    ] = headerBackgroundColor;
    defaultThemeColorsSurvey[
      "$body-container-background-color"
    ] = bodyContainerBackgroundColor;

    var defaultThemeColorsEditor =
      SurveyEditor.StylesManager.ThemeColors["default"];
    defaultThemeColorsEditor["$primary-color"] = mainColor;
    defaultThemeColorsEditor["$secondary-color"] = mainColor;
    defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
    defaultThemeColorsEditor["$primary-text-color"] = textColor;
    defaultThemeColorsEditor["$selection-border-color"] = mainColor;

    SurveyKo.StylesManager.applyTheme();
    SurveyEditor.StylesManager.applyTheme();
  }

  saveMySurvey = () => {
    let jsonText = JSON.stringify(this.editor.text);
    let jsonObject = JSON.parse(this.editor.text);
    console.log(jsonObject);
    let request: FutureSurveyRequest = new FutureSurveyRequest(
      jsonText,
      jsonObject.title,
      jsonObject.clientId,
      jsonObject.pages
    );

    //IN UNDER CONSTRUCTIONS
    //this.submitFutureSurvey(request);
    this.navigateToSurveyView(jsonObject);
    this.surveySaved.emit(JSON.parse(this.editor.text));
  };

  navigateToSurveyView(res: any) {
    let extraParam: NavigationExtras = {
      queryParams: {
        jsonContent: JSON.stringify(res)
      }
    };

    this.router.navigate(["shop/sViewer"], extraParam);
  }

  submitFutureSurvey(jsonContent: any) {
    this.furureSurveyService
      .submitFutureSurveyContent(jsonContent)
      .subscribe(data => {
        console.log("COMPO..................");
        console.log(data.jsonContent);
        console.log("COMPO 2..................");
        let jData = JSON.parse(data.jsonContent);
        console.log(jData);
        let JsonD = JSON.stringify(jData);
        console.log("COMPO 3..................");
        console.log(JsonD);
        // let jsonContent = JSON.parse(data.jsonContent);
        // let pagesResp : any[] =  data.pages;
        // let pages: any[] = jsonContent.pages;
        // console.log("pages..............................");
        // console.log(pages);
        // console.log("pages response ..............................");
        // console.log(pagesResp)

        // pages.forEach(page => {
        // });
      });
  }
}

export class FutureSurveyRequest {
  constructor(
    public jsonContent: String,
    public title: string,
    public clientId: string,
    public pages: any[]
  ) {}
}

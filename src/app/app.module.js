"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var question1_component_1 = require("./questions/question1/question1.component");
var question2_component_1 = require("./questions/question2/question2.component");
var app_routes_1 = require("./app.routes");
var questions_service_1 = require("./questions/questions.service");
var question3_component_1 = require("./questions/question3/question3.component");
var finalScore_component_1 = require("./questions/finalScore/finalScore.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_1.routing],
        declarations: [app_component_1.AppComponent,
            question1_component_1.QuestionOneComponent,
            question2_component_1.QuestionTwoComponent,
            question3_component_1.QuestionThreeComponent,
            finalScore_component_1.FinalScoreComponent],
        providers: [questions_service_1.QuestionsService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
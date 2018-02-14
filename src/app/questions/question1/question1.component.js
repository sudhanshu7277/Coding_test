"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var questions_service_1 = require("../questions.service");
var QuestionOneComponent = (function () {
    function QuestionOneComponent(router, _questionsService) {
        this.router = router;
        this._questionsService = _questionsService;
    }
    QuestionOneComponent.prototype.ngOnInit = function () {
        this.questions = this._questionsService.getQuestionsData();
        this.firstQuestion = this.questions[0].question;
        this.totalSteps = this.questions.length;
        this.firstStep = this.questions[0].step;
    };
    QuestionOneComponent.prototype.redirectTwoQuestion2 = function (valid) {
        var count = 0;
        if (valid === true) {
            count = count + 1;
            this._questionsService.firstQuestionData = count;
            this.router.navigate(['./question2']);
        }
        else if (valid === false) {
            count = 0;
            this._questionsService.firstQuestionData = count;
            this.router.navigate(['./question2']);
        }
        count = 0;
    };
    return QuestionOneComponent;
}());
QuestionOneComponent = __decorate([
    core_1.Component({
        selector: 'question1',
        templateUrl: './question1.component.html',
        styleUrls: ['./question1.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router, questions_service_1.QuestionsService])
], QuestionOneComponent);
exports.QuestionOneComponent = QuestionOneComponent;
//# sourceMappingURL=question1.component.js.map
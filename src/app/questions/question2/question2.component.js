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
var QuestionTwoComponent = (function () {
    function QuestionTwoComponent(router, _questionsService) {
        this.router = router;
        this._questionsService = _questionsService;
        this.newScore = 0;
    }
    QuestionTwoComponent.prototype.ngOnInit = function () {
        this.questions = this._questionsService.getQuestionsData();
        this.secondQuestion = this.questions[1].question;
        this.totalSteps = this.questions.length;
        this.secondStep = this.questions[1].step;
        this.previousScore = this._questionsService.firstQuestionData;
    };
    QuestionTwoComponent.prototype.getFinalScore = function (value) {
        var htmlScore = 0;
        var newScore = 0;
        if (value === 1) {
            htmlScore = htmlScore + 1;
            this._questionsService.secondQuestionData = htmlScore;
            this.router.navigate(['./question3']);
        }
        else if (value === 2) {
            htmlScore = htmlScore + 2;
            this._questionsService.secondQuestionData = htmlScore;
            this.router.navigate(['./question3']);
        }
        else if (value === 3) {
            htmlScore = htmlScore + 3;
            this._questionsService.secondQuestionData = htmlScore;
            this.router.navigate(['./question3']);
        }
        else if (value === 4) {
            htmlScore = htmlScore + 4;
            this._questionsService.secondQuestionData = htmlScore;
            this.router.navigate(['./question3']);
        }
        newScore = htmlScore + this.previousScore;
        return newScore;
    };
    return QuestionTwoComponent;
}());
QuestionTwoComponent = __decorate([
    core_1.Component({
        selector: 'question2',
        templateUrl: './question2.component.html',
        styleUrls: ['./question2.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        questions_service_1.QuestionsService])
], QuestionTwoComponent);
exports.QuestionTwoComponent = QuestionTwoComponent;
//# sourceMappingURL=question2.component.js.map
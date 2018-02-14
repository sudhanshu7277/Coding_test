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
var QuestionThreeComponent = (function () {
    function QuestionThreeComponent(router, _questionsService) {
        this.router = router;
        this._questionsService = _questionsService;
        this.finalScore = 0;
    }
    QuestionThreeComponent.prototype.ngOnInit = function () {
        this.questions = this._questionsService.getQuestionsData();
        this.thirdQuestion = this.questions[2].question;
        this.totalSteps = this.questions.length;
        this.thirdStep = this.questions[2].step;
        this.previousTwoScore = this._questionsService.secondQuestionData;
    };
    QuestionThreeComponent.prototype.getFinalScore = function (value) {
        var jsScore = 0;
        var finalScore = 0;
        if (value === 1) {
            finalScore = jsScore + 1;
            this._questionsService.finalScoreData = finalScore;
            this.router.navigate(['./finalScore']);
        }
        else if (value === 2) {
            finalScore = jsScore + 2;
            this._questionsService.finalScoreData = finalScore;
            this.router.navigate(['./finalScore']);
        }
        else if (value === 3) {
            finalScore = jsScore + 3;
            this._questionsService.finalScoreData = finalScore;
            this.router.navigate(['./finalScore']);
        }
        else if (value === 4) {
            finalScore = jsScore + 4;
            this._questionsService.finalScoreData = finalScore;
            this.router.navigate(['./finalScore']);
        }
        finalScore = jsScore + this.previousTwoScore;
        return finalScore;
    };
    return QuestionThreeComponent;
}());
QuestionThreeComponent = __decorate([
    core_1.Component({
        selector: 'question3',
        templateUrl: './question3.component.html',
        styleUrls: ['./question3.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        questions_service_1.QuestionsService])
], QuestionThreeComponent);
exports.QuestionThreeComponent = QuestionThreeComponent;
//# sourceMappingURL=question3.component.js.map
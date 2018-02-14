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
var FinalScoreComponent = (function () {
    function FinalScoreComponent(router, _questionsService) {
        this.router = router;
        this._questionsService = _questionsService;
    }
    FinalScoreComponent.prototype.ngOnInit = function () {
        this.questions = this._questionsService.getQuestionsData();
        this.firstQuestion = this.questions[0].question;
        console.log(this.firstQuestion);
    };
    FinalScoreComponent.prototype.redirectTwoQuestion2 = function (valid) {
        var count = 0;
        if (valid === true) {
            count = count + 1;
            console.log('score awarded : ' + count);
            this._questionsService.firstQuestionData = count;
            this.router.navigate(['./question2']);
        }
        else if (valid === false) {
            count = 0;
            console.log('score awarded : ' + count);
            this._questionsService.firstQuestionData = count;
            this.router.navigate(['./question2']);
        }
        count = 0;
    };
    return FinalScoreComponent;
}());
FinalScoreComponent = __decorate([
    core_1.Component({
        selector: 'question1',
        templateUrl: './finalScore.component.html',
        styleUrls: ['./question1.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router, questions_service_1.QuestionsService])
], FinalScoreComponent);
exports.FinalScoreComponent = FinalScoreComponent;
//# sourceMappingURL=finalScore_component.js.map
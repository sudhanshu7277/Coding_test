"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var QuestionsService = (function () {
    function QuestionsService() {
        this.firstCount = 0;
        this.secondCount = 0;
        this.finalCount = 0;
    }
    QuestionsService.prototype.getQuestionsData = function () {
        return [
            {
                "id": 1,
                "question": "Is the color of grass green ?",
                "step": 1
            },
            {
                "id": 2,
                "question": "How would you rate yourself in html5 & css3 on a scale of 1 to 4 ?",
                "step": 2
            },
            {
                "id": 3,
                "question": "How would you rate yourself in javascript & angular4 on a scale of 1 to 4 ?",
                "step": 3
            }, {
                "id": 4,
                "question": "Here is your Final Score",
                "step": 4
            }
        ];
    };
    Object.defineProperty(QuestionsService.prototype, "firstQuestionData", {
        get: function () {
            return this.firstCount;
        },
        set: function (firstReply) {
            this.firstCount = firstReply;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(QuestionsService.prototype, "secondQuestionData", {
        get: function () {
            return this.secondCount;
        },
        set: function (secondReply) {
            this.secondCount = secondReply + this.firstCount;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(QuestionsService.prototype, "finalScoreData", {
        get: function () {
            return this.finalCount;
        },
        set: function (finalReply) {
            this.finalCount = finalReply + this.secondCount;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return QuestionsService;
}());
QuestionsService = __decorate([
    core_1.Injectable()
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuestionsService {

    firstCount: any = 0;
    secondCount: any = 0;
    finalCount: any = 0;

    getQuestionsData() {
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
        },{
            "id": 4,
            "question": "Here is your Final Score",
            "step": 4
        }
        ];
    }

    get firstQuestionData(): any {
        return this.firstCount;
    };

    set firstQuestionData(firstReply: any) {
        this.firstCount = firstReply;
    };

    get secondQuestionData(): any {
        return this.secondCount;
    };

    set secondQuestionData(secondReply: any) {
        this.secondCount = secondReply + this.firstCount;
    };

    get finalScoreData(): any {
        return this.finalCount;
    };

    set finalScoreData(finalReply: any) {
        this.finalCount = finalReply + this.secondCount;
    };
    
}
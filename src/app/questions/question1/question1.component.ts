import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class QuestionOneComponent implements OnInit { 

  private questions: any;
  private firstQuestion: any;
  firstStep: number;
  private totalSteps: number;
  constructor(private router: Router, private _questionsService: QuestionsService) { 
  }

  ngOnInit() {

    this.questions = this._questionsService.getQuestionsData();
    this.firstQuestion = this.questions[0].question;
    this.totalSteps = this.questions.length;
    this.firstStep = this.questions[0].step;
}

redirectTwoQuestion2(valid: any) {
    let count = 0;
    if(valid === true) {
      count = count + 1;
      this._questionsService.firstQuestionData = count;
      this.router.navigate(['./question2']);
    } else if(valid === false) {
      count = 0;
      this._questionsService.firstQuestionData = count;
      this.router.navigate(['./question2']);
    }
      count = 0;
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
  
})

export class QuestionTwoComponent implements OnInit { 

  private questions: any;
  private secondQuestion: any;
  private secondStep: number;
  private totalSteps: number;
  constructor(private router: Router, 
    private _questionsService: QuestionsService) { 
  }

  private previousScore: number;

  ngOnInit() {
    this.questions = this._questionsService.getQuestionsData();
    this.secondQuestion = this.questions[1].question;
    this.totalSteps = this.questions.length;
    this.secondStep = this.questions[1].step;
    this.previousScore = this._questionsService.firstQuestionData;
}

  getFinalScore(value: number) {
    let htmlScore = 0;
    let newScore: number = 0;
    if(value === 1) {
      htmlScore = htmlScore + 1;
      this._questionsService.secondQuestionData = htmlScore;
      this.router.navigate(['./question3']);
    } else if(value === 2) {
      htmlScore = htmlScore + 2;
      this._questionsService.secondQuestionData = htmlScore;
      this.router.navigate(['./question3']);
    } 
    else if(value === 3) {
      htmlScore = htmlScore + 3;
      this._questionsService.secondQuestionData = htmlScore;
      this.router.navigate(['./question3']);
    } 
    else if(value === 4) {
      htmlScore = htmlScore + 4;
      this._questionsService.secondQuestionData = htmlScore;
      this.router.navigate(['./question3']);
    } 
    newScore = htmlScore + this.previousScore;
    return newScore;
  }
   newScore = 0;
   
}

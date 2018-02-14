import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})

export class QuestionThreeComponent implements OnInit { 

  private questions: any;
  private thirdQuestion: any;
  private thirdStep: number;
  private totalSteps: number;
  private previousTwoScore: number;

  constructor(private router: Router, 
    private _questionsService: QuestionsService) { 
  }
  
  ngOnInit() {
    this.questions = this._questionsService.getQuestionsData();
    this.thirdQuestion = this.questions[2].question;
    this.totalSteps = this.questions.length;
    this.thirdStep = this.questions[2].step;
    this.previousTwoScore = this._questionsService.secondQuestionData;
}

  getFinalScore(value: number) {
    let jsScore = 0;
    let finalScore: number = 0;
    if(value === 1) {
        finalScore = jsScore + 1;
        this._questionsService.finalScoreData = finalScore;
      this.router.navigate(['./finalScore']);
    } else if(value === 2) {
        finalScore = jsScore + 2;
        this._questionsService.finalScoreData = finalScore;
      this.router.navigate(['./finalScore']);
    } 
    else if(value === 3) {
        finalScore = jsScore + 3;
        this._questionsService.finalScoreData = finalScore;
      this.router.navigate(['./finalScore']);
    } 
    else if(value === 4) {
        finalScore = jsScore + 4;
        this._questionsService.finalScoreData = finalScore;
      this.router.navigate(['./finalScore']);
    } 
    finalScore = jsScore + this.previousTwoScore;
    return finalScore;
  }
  finalScore = 0;
}

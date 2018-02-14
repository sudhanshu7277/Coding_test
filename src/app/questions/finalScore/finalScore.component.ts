import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'final_score',
  templateUrl: './finalScore.component.html',
  styleUrls: ['./finalScore.component.scss']
})
export class FinalScoreComponent implements OnInit {

  private questions: any;
  private result: any;
  private displayFinalScore: any;
  private finalStep: number;
  private totalSteps: number;
  constructor(private router: Router, private _questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.questions = this._questionsService.getQuestionsData();
    this.result = this.questions[3].question;
    this.totalSteps = this.questions.length;
    this.finalStep = this.questions[3].step;
    this.displayFinalScore = this._questionsService.finalScoreData;
  }

}

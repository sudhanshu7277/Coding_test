import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { QuestionOneComponent } from './questions/question1/question1.component';
import { QuestionTwoComponent } from './questions/question2/question2.component';
import { routing } from './app.routes';
import { QuestionsService } from './questions/questions.service';
import { QuestionThreeComponent } from './questions/question3/question3.component';
import { FinalScoreComponent } from './questions/finalScore/finalScore.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpModule, 
                  JsonpModule, 
                  routing ],
  declarations: [ AppComponent, 
                  QuestionOneComponent, 
                  QuestionTwoComponent, 
                  QuestionThreeComponent, 
                  FinalScoreComponent ],
  providers:    [ QuestionsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

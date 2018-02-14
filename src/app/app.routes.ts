import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionOneComponent } from './questions/question1/question1.component';
import { QuestionTwoComponent } from './questions/question2/question2.component';
import { AppComponent } from './app.component';
import { QuestionThreeComponent } from './questions/question3/question3.component';
import { FinalScoreComponent } from './questions/finalScore/finalScore.component';

const routes: Routes = [
  { path: '', redirectTo: 'question1', pathMatch: 'full' },
    { path: 'question1', component: QuestionOneComponent },
    { path: 'question2', component: QuestionTwoComponent },
    { path: 'question3', component: QuestionThreeComponent },
    { path: 'finalScore', component: FinalScoreComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
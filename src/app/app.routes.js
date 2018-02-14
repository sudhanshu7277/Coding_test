"use strict";
var router_1 = require("@angular/router");
var question1_component_1 = require("./questions/question1/question1.component");
var question2_component_1 = require("./questions/question2/question2.component");
var question3_component_1 = require("./questions/question3/question3.component");
var finalScore_component_1 = require("./questions/finalScore/finalScore.component");
var routes = [
    { path: '', redirectTo: 'question1', pathMatch: 'full' },
    { path: 'question1', component: question1_component_1.QuestionOneComponent },
    { path: 'question2', component: question2_component_1.QuestionTwoComponent },
    { path: 'question3', component: question3_component_1.QuestionThreeComponent },
    { path: 'finalScore', component: finalScore_component_1.FinalScoreComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map
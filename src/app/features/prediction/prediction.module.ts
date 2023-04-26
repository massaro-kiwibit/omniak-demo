import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictionRoutingModule } from './prediction-routing.module';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';
import { PredictionDashboardComponent } from './components/prediction-dashboard/prediction-dashboard.component';


@NgModule({
  declarations: [
    AgendaComponent,
    TimetableComponent,
    WeeklyPlanComponent,
    PredictionDashboardComponent
  ],
  imports: [
    CommonModule,
    PredictionRoutingModule
  ]
})
export class PredictionModule { }

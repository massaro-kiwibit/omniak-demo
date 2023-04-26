import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictionRoutingModule } from './prediction-routing.module';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';
import { PredictionDashboardComponent } from './components/prediction-dashboard/prediction-dashboard.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GridColumnsDirective } from 'src/app/shared/directives/grid-columns.directive';

@NgModule({
  declarations: [
    AgendaComponent,
    TimetableComponent,
    WeeklyPlanComponent,
    PredictionDashboardComponent
  ],
  imports: [
    CommonModule,
    PredictionRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    GridColumnsDirective,
    MatIconModule
  ]
})
export class PredictionModule { }

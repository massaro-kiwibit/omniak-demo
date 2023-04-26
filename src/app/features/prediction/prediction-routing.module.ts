import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';
import { PageComponent } from 'src/app/core/components/page/page.component';
import { PredictionDashboardComponent } from './components/prediction-dashboard/prediction-dashboard.component';

const routes: Routes = [
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'weekly-plan',
    component: WeeklyPlanComponent
  },
  {
    path: '',
    component: PredictionDashboardComponent
  },
  {
    path: '**',
    component: PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionRoutingModule { }

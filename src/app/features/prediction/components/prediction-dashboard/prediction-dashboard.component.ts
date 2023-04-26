import { Component } from '@angular/core';

@Component({
  selector: 'app-prediction-dashboard',
  templateUrl: './prediction-dashboard.component.html',
  styleUrls: ['./prediction-dashboard.component.scss']
})
export class PredictionDashboardComponent {
  widgets = [
    {
      name: 'Agenda',
      path: 'agenda'
    },
    {
      name: 'Scadenziario',
      path: 'timetable'
    },
    {
      name: 'Piano Settimanale',
      path: 'weekly-plan'
    },
  ]
}

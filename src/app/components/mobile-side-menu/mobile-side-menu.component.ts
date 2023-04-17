import { Component } from '@angular/core';
import { MenuItem } from 'src/app/app.component';
import { menu } from 'src/app/config/menu';

@Component({
  selector: 'app-mobile-side-menu',
  templateUrl: './mobile-side-menu.component.html',
  styleUrls: ['./mobile-side-menu.component.scss']
})
export class MobileSideMenuComponent {
  menu: MenuItem[] = menu;
  shortcuts: MenuItem[] = [
    {
      name: 'Agenda',
      icon: 'calendar_today',
      path: 'activity/agenda'
    },
    {
      name: 'Interventi',
      icon: 'assignment',
      path: 'activity/interventions'
    },
    {
      name: 'Piano Settimanale',
      icon: 'print',
      path: 'activity/weekly-plan'
    }
  ];
}

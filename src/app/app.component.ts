import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigation-prototype';
  hidden: boolean = true;
  menu: MenuItem[] = [
    {
      name: 'Home',
      icon: 'roofing',
      path: 'home'
    },
    {
      name: 'Develop',
      icon: 'code',
      path: 'develop',
      subMenu: [
        {
          name: 'Android',
          icon: 'android',
          path: 'develop/android'
        },
        {
          name: 'Flutter',
          icon: 'flutter_dash',
          path: 'develop/flutter'
        },
        {
          name: 'Web',
          icon: 'language',
          path: 'develop/web'
        }
      ]
    },
    {
      name: 'Foundations',
      icon: 'book',
      path: 'foundations',
      subMenu: [
        {
          name: 'Accessibility',
          icon: 'accessibility'
        },
        {
          name: 'Customizing Material',
          icon: 'support_agent'
        }
      ]
    },
    {
      name: 'Styles',
      icon: 'palette',
      path: 'styles'
    },
  ]
  selected: any = null;
}

interface MenuItem {
  name: string;
  icon?: string;
  path?: string;
  subMenu?: MenuItem[];
}
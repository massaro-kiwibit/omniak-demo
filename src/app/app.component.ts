import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigation-prototype';
  hidden: boolean = true;
  menu = [
    {
      name: 'Home',
      icon: 'roofing'
    },
    {
      name: 'Get started',
      icon: 'apps'
    },
    {
      name: 'Develop',
      icon: 'code',
      children: [
        {
          name: 'Android'
        },
        {
          name: 'Flutter'
        },
        {
          name: 'Web'
        }
      ]
    },
    {
      name: 'Foundations',
      icon: 'book',
      children: [
        {
          name: 'Accessibility'
        },
        {
          name: 'Customizing Material'
        }
      ]
    },
    {
      name: 'Styles',
      icon: 'palette'
    },
  ]
  selected: any = null;
}

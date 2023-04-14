import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  // Activity
  {
    path: 'activity',
    component: PageComponent,
    children: [
      {
        path: 'agenda',
        component: PageComponent,
      },
      {
        path: 'interventions',
        component: PageComponent
      },
      {
        path: 'weekly-plan',
        component: PageComponent
      },
    ]
  },
  // Registry
  {
    path: 'registry',
    component: PageComponent,
    children: [
      {
        path: 'companies',
        component: PageComponent
      },
      {
        path: 'assets',
        component: PageComponent
      },
      {
        path: 'assets',
        component: PageComponent
      },
      {
        path: 'categories',
        component: PageComponent
      },
      {
        path: 'productions',
        component: PageComponent
      },
      {
        path: 'instruments',
        component: PageComponent
      },
      {
        path: 'consumables',
        component: PageComponent
      },
      {
        path: 'expenses',
        component: PageComponent
      },
    ]
  },
  // Statistics
  {
    path: 'statistics',
    component: PageComponent,
    children: [
      {
        path: 'operators',
        component: PageComponent
      },
      {
        path: 'consumables',
        component: PageComponent
      },
      {
        path: 'reservations',
        component: PageComponent
      },
    ]
  },
  // Settings
  {
    path: 'settings',
    component: PageComponent,
    children: [
      {
        path: 'users',
        component: PageComponent
      },
      {
        path: 'company-info',
        component: PageComponent
      },
      {
        path: 'general',
        component: PageComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'activity/agenda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

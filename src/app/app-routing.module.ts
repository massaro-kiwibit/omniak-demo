import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'activity/agenda',
        pathMatch: 'full'
      },
      // Activity
      {
        path: 'activity',
        redirectTo: 'activity/agenda'
      },
      {
        path: 'activity/agenda',
        component: PageComponent
      },
      {
        path: 'activity/interventions',
        component: PageComponent
      },
      {
        path: 'activity/weekly-plan',
        component: PageComponent
      },
      // Registry
      {
        path: 'registry',
        redirectTo: 'registry/companies'
      },
      {
        path: 'registry/companies',
        component: PageComponent
      },
      {
        path: 'registry/assets',
        component: PageComponent
      },
      {
        path: 'registry/assets',
        component: PageComponent
      },
      {
        path: 'registry/categories',
        component: PageComponent
      },
      {
        path: 'registry/productions',
        component: PageComponent
      },
      {
        path: 'registry/instruments',
        component: PageComponent
      },
      {
        path: 'registry/consumables',
        component: PageComponent
      },
      {
        path: 'registry/expenses',
        component: PageComponent
      },
      // Statistics
      {
        path: 'statistics',
        redirectTo: 'statistics/operators'
      },
      {
        path: 'statistics/operators',
        component: PageComponent
      },
      {
        path: 'statistics/consumables',
        component: PageComponent
      },
      {
        path: 'statistics/reservations',
        component: PageComponent
      },
      // Settings
      {
        path: 'settings',
        redirectTo: 'settings/users'
      },
      {
        path: 'settings/users',
        component: PageComponent
      },
      {
        path: 'settings/company-info',
        component: PageComponent
      },
      {
        path: 'settings/general',
        component: PageComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { isLoggedGuard } from './core/guards/is-logged.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [isLoggedGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'prediction'
      },
      {
        path: 'prediction',
        loadChildren: () => import('./features/prediction/prediction.module').then(m => m.PredictionModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('./features/activity/activity.module').then(m => m.ActivityModule)
      },
      {
        path: 'analysis',
        loadChildren: () => import('./features/analysis/analysis.module').then(m => m.AnalysisModule)
      },
      {
        path: 'registry',
        loadChildren: () => import('./features/registry/registry.module').then(m => m.RegistryModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

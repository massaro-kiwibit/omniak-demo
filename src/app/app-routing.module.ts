import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StylesComponent } from './components/styles/styles.component';
import { AndroidComponent } from './components/android/android.component';
import { WebComponent } from './components/web/web.component';
import { DevelopComponent } from './components/develop/develop.component';
import { FoundationsComponent } from './components/foundations/foundations.component';
import { FlutterComponent } from './components/flutter/flutter.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'develop',
    component: DevelopComponent
  },
  {
    path: 'develop/android',
    component: AndroidComponent
  },
  {
    path: 'develop/flutter',
    component: FlutterComponent
  },
  {
    path: 'develop/web',
    component: WebComponent
  },
  {
    path: 'foundations',
    component: FoundationsComponent
  },
  {
    path: 'styles',
    component: StylesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

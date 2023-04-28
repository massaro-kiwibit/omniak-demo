import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionsComponent } from './components/interventions/interventions.component';
import { PageComponent } from 'src/app/core/components/page/page.component';
import { OverviewComponent } from 'src/app/shared/components/overview/overview.component';

const routes: Routes = [
  {
    path: 'interventions',
    component: InterventionsComponent
  },
  {
    path: '',
    component: OverviewComponent
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
export class ActivityRoutingModule { }

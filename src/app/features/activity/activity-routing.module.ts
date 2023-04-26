import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionsComponent } from './components/interventions/interventions.component';
import { PageComponent } from 'src/app/core/components/page/page.component';

const routes: Routes = [
  {
    path: 'interventions',
    component: InterventionsComponent
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

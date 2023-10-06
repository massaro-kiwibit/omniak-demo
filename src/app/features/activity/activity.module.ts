import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { InterventionsComponent } from './components/interventions/interventions.component';
import { TimePickerComponent } from 'src/app/shared/components/time-picker/time-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MbscDatepickerModule } from '@mobiscroll/angular';
import { GridColumnsDirective } from 'src/app/shared/directives/grid-columns.directive';


@NgModule({
  declarations: [
    InterventionsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ActivityRoutingModule,
    TimePickerComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    forwardRef(() => TimePickerComponent),
    MbscDatepickerModule,
    GridColumnsDirective
  ]
})
export class ActivityModule { }

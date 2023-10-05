import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { InterventionsComponent } from './components/interventions/interventions.component';
import { TimePickerComponent } from 'src/app/shared/components/time-picker/time-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    InterventionsComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    TimePickerComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    forwardRef(() => TimePickerComponent),
  ]
})
export class ActivityModule { }

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Time } from 'src/app/shared/components/time-picker/time-picker.component';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.scss']
})
export class InterventionsComponent {

  form: FormGroup = new FormGroup({
    time: new FormControl(new Time('', '')),
  });

  test() {
    console.log(this.form);
  }

}

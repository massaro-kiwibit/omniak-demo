import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MbscDatepickerOptions } from '@mobiscroll/angular';
import { PlatformService } from 'src/app/core/services/platform.service';
import { Time } from 'src/app/shared/components/time-picker/time-picker.component';

@Component({
    selector: 'app-interventions',
    templateUrl: './interventions.component.html',
    styleUrls: ['./interventions.component.scss'],
    standalone: false
})
export class InterventionsComponent {

  platform = inject(PlatformService);
  isMobile$ = this.platform.isMobile$;

  time: string | null = null;

  timeControl = new FormControl(new Time(null, null))

  test1() {
    console.log(this.timeControl.value);
  }
  test2() {
    console.log(this.time);
  }

  options: MbscDatepickerOptions = {
    baseTheme: 'material'
  }

  prova() {
    const hours = this.time?.split('H')[0];
    const minutes = this.time?.split('H')[1].replace('M', '');
    return `${hours} ore ${minutes} minuti`
  }

}

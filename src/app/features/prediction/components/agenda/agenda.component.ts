import { Component } from '@angular/core';
import { Slide } from 'src/app/core/models/slide.models';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

  slides: Slide[] = Array.from({ length: 10 }, (value, index) => ({ src: `assets/images/carousel/${index + 1}.jpg` }));

  src: string | null | ArrayBuffer = "";

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.src = reader.result;

      reader.readAsDataURL(file);
    }
  }

}

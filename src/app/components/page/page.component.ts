import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  title: string = "";

  constructor(private ar: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.title = event.url.replace("/", "").replaceAll("/", " | ");
        }
      }
    );
  }

}

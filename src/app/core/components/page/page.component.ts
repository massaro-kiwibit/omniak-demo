import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    standalone: false
})
export class PageComponent {


  constructor(private ar: ActivatedRoute, private router: Router) { }

}

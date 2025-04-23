import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-mobile-side-menu',
    templateUrl: './mobile-side-menu.component.html',
    styleUrls: ['./mobile-side-menu.component.scss'],
    standalone: false
})
export class MobileSideMenuComponent {

  authService = inject(AuthService);

}

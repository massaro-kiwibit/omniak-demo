import { Component, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GridColumnsDirective } from '../../directives/grid-columns.directive';
import { Router, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from 'src/app/core/models/menu-item.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { PlatformService } from 'src/app/core/services/platform.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-overview',
    imports: [
        CommonModule,
        MatCardModule,
        GridColumnsDirective,
        RouterModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ],
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  router = inject(Router);
  authService = inject(AuthService);
  platform = inject(PlatformService);

  @Input() widgets: MenuItem[] = [];

  constructor() {
    this.authService.menu$
      .pipe(takeUntilDestroyed())
      .subscribe(
        menu => {
          this.widgets = menu.find(item => item.path === this.router.url.replace("/", ""))?.children ?? [];
        }
      );
  }

}

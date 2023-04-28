import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GridColumnsDirective } from '../../directives/grid-columns.directive';
import { Router, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from 'src/app/core/models/menu-item.model';
import { menu } from 'src/app/core/config/menu';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    GridColumnsDirective,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() widgets: MenuItem[] = [];

  router = inject(Router);

  ngOnInit() {
    this.widgets = menu.find(item => item.path === this.router.url.replace("/", ""))?.children ?? [];
  }

}

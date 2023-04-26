import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { menu } from 'src/app/core/config/menu';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'app-desktop-side-menu',
  templateUrl: './desktop-side-menu.component.html',
  styleUrls: ['./desktop-side-menu.component.scss'],
})
export class DesktopSideMenuComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  menu: MenuItem[] = menu;
  drawerMenu: MenuItem[] = [];

  destroyed = new Subject<void>();

  desktopView$ = this.breakpointObserver
    .observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed));

  constructor(private breakpointObserver: BreakpointObserver) { }

  openMenuFromToggle() {
    // TODO
    this.drawer.toggle();
    this.drawerMenu = menu;
  }

  onDrawerLeave() {
    this.desktopView$.subscribe({
      next: (res) => {
        if (res.matches) {
          this.drawer.close();
        }
      }
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { MobileSideMenuComponent } from './components/mobile-side-menu/mobile-side-menu.component';
import { DesktopSideMenuComponent } from './components/desktop-side-menu/desktop-side-menu.component';
import { PageComponent } from './components/page/page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { GridColumnsDirective } from '../shared/directives/grid-columns.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    MobileSideMenuComponent,
    DesktopSideMenuComponent,
    PageComponent,
    LayoutComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterModule,
    MatBadgeModule,
    MatListModule,
    GridColumnsDirective,
    MatSnackBarModule
  ],
  exports: [
    LoginComponent,
    MobileSideMenuComponent,
    DesktopSideMenuComponent,
    PageComponent,
    LayoutComponent
  ]
})
export class CoreModule { }

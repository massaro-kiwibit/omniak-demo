import { Subject, map, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { THEME_KEY, ThemeService } from '../../services/theme.service';

type Theme = 'default' | 'bh' | 'kiwi-dark';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

  currentTheme: Theme = localStorage.getItem(THEME_KEY) as Theme;

  destroyed = new Subject<void>();

  isDesktop$ = this.breakpointObserver
    .observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(
      takeUntil(this.destroyed),
      map(state => state.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
  ) { }

  // Swap them out, and keep track of the new theme
  switchTheme(newTheme: Theme): void {
    this.themeService.setTheme(newTheme);
    this.currentTheme = newTheme;
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}

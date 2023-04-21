import { Subject, map, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type Theme = 'default' | 'bh' | 'kiwi-dark';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

  currentTheme: Theme = 'default';

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
    @Inject(DOCUMENT) private document: Document
  ) {
    this.document.body.classList.add(this.currentTheme);
  }

  // Swap them out, and keep track of the new theme
  switchTheme(newTheme: Theme): void {
    this.document.body.classList.replace(this.currentTheme, newTheme)
    this.currentTheme = newTheme;
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}

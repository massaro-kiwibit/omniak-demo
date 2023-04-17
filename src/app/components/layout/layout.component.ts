import { Subject, map, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

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

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}

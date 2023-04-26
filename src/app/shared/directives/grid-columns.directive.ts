import { BreakpointObserver } from '@angular/cdk/layout';

import { Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { MediaQueries } from 'src/app/core/config/breakpoints.config';




@Directive({

  selector: '[grid-columns]',

  standalone: true

})

export class GridColumnsDirective implements OnChanges, OnDestroy {




  destroyed = new Subject<void>();




  @HostBinding('style.display') display = 'grid';




  @Input() gap?: string;

  @Input() alignItems?: string;




  @Input() xs?: string;

  @Input() 'gt-xs'?: string;

  @Input() 'lt-sm'?: string;

  @Input() xl?: string;

  @Input() sm?: string;

  @Input() 'gt-sm'?: string;

  @Input() 'lt-md'?: string;

  @Input() md?: string;

  @Input() 'gt-md'?: string;

  @Input() 'lt-lg'?: string;

  @Input() lg?: string;

  @Input() 'gt-lg'?: string;

  @Input() 'lt-xl'?: string;




  @HostBinding('style.grid-gap')

  get gridColumnGap(): string {

    return this.gap ?? '';

  }




  @HostBinding('style.align-items')

  get gridAlignItems(): string {

    return this.alignItems ?? '';

  }




  constructor(

    private breakpointObserver: BreakpointObserver,

    private element: ElementRef

  ) { }




  ngOnChanges(changes: SimpleChanges): void {

    const queries = Array.from(MediaQueries.entries())

      // Of all the possible queries i take only those passed as input to the directive

      .filter(([size, query]) => Object.keys(changes).indexOf(size) != -1)

      .map(([size, query]) => query);

    if (queries.length > 0) {

      this.breakpointObserver

        .observe(queries)

        .pipe(takeUntil(this.destroyed))

        .subscribe({

          next: (state) => {

            Object.entries(state.breakpoints).forEach(

              ([query, isMatched]) => {

                const InvertedMediaQueries = new Map(Array.from(MediaQueries, entry => [entry[1], entry[0]]))

                let size = InvertedMediaQueries.get(query);

                if (!state.matches) {

                  this.element.nativeElement.style.setProperty('grid-template-columns', '')

                }

                if (isMatched && size) {

                  this.element.nativeElement.style.setProperty('grid-template-columns', changes[size].currentValue)

                }

              }

            )

          }

        });

    }

  }




  ngOnDestroy() {

    this.destroyed.next();

    this.destroyed.complete();

  }




}
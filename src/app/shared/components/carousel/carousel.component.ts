import { AfterViewInit, Component, Input, OnDestroy, TemplateRef, ViewChild, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject, interval, takeUntil } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatCardModule
  ],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class CarouselComponent implements AfterViewInit, OnDestroy, OnChanges {

  destroyed$ = new Subject<void>();

  currentSlide = 0;
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 5000;

  @ViewChild('carousel', { static: true }) carousel!: TemplateRef<any>;

  @Input() slides: { src: string }[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnChanges() {
    console.log(this.slides);
  }

  ngAfterViewInit(): void {
    if (this.autoPlay) {
      interval(this.autoPlayInterval)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.onNextClick());
    }
  }

  openCarousel() {
    this.dialog.open(this.carousel, {
      panelClass: 'carousel',
      height: '90%'
    });
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}

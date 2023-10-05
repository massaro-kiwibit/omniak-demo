import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';

export class Time {
  constructor(public hours: string, public minutes: string) { }
}

@Component({
  selector: 'app-time-picker',
  exportAs: 'timePicker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    OverlayModule,
    MatButtonModule,
    MatSelectModule,
    NgFor
  ],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: TimePickerComponent }],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
})
export class TimePickerComponent implements ControlValueAccessor, MatFormFieldControl<Time>, OnDestroy {

  @ViewChild('trigger') trigger?: ElementRef | null;
  _triggerRect?: ClientRect;

  togglePanel() {
    this._triggerRect = this.trigger?.nativeElement.getBoundingClientRect();
    this.isOpen = !this.isOpen;
  }

  isOpen = false;

  static nextId = 0;
  @ViewChild('hours') hoursInput!: HTMLInputElement;
  @ViewChild('minutes') minutesInput!: HTMLInputElement;

  parts: FormGroup<{
    hours: FormControl<string | null>;
    minutes: FormControl<string | null>;
  }>;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'example-tel-input';
  id = `example-tel-input-${TimePickerComponent.nextId++}`;
  onChange = (_: any) => { };
  onTouched = () => { };

  get empty() {
    const {
      value: { hours, minutes },
    } = this.parts;

    return !hours && !minutes;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input('aria-describedby') userAriaDescribedBy!: string;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder!: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): Time | null {
    if (this.parts.valid) {
      const {
        value: { hours, minutes },
      } = this.parts;
      return new Time(hours!, minutes!);
    }
    return null;
  }
  set value(tel: Time | null) {
    const { hours, minutes } = tel || new Time('', '');
    this.parts.setValue({ hours, minutes });
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return this.parts.invalid && this.touched;
  }

  constructor(
    formBuilder: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.parts = formBuilder.group({
      hours: ['', [Validators.required, Validators.min(0), Validators.max(23)]],
      minutes: ['', [Validators.required, Validators.min(0), Validators.max(59)]],
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.example-tel-input-container',
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick(event: MouseEvent) {
    /* if (this.parts.controls.minutes.valid) {
      this._focusMonitor.focusVia(this.minutesInput, 'program');
    } else if (this.parts.controls.hours.valid) {
      this._focusMonitor.focusVia(this.minutesInput, 'program');
    } else {
      this._focusMonitor.focusVia(this.hoursInput, 'program');
    } */
  }

  writeValue(time: Time | null): void {
    this.value = time;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    //this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

  range(n: number) {
    return Array.from(Array(n).keys()).map(n => String(n));
  }

  test(e: any) {
    console.log(e);
  }

  onHoursSelect(event: MatSelectChange) {
    this.value = {
      hours: event.value,
      minutes: this.parts.controls.minutes.value!
    };
  }

  onMinutesSelect(event: MatSelectChange) {
    this.value = {
      hours: this.parts.controls.hours.value!,
      minutes: event.value
    };
  }

}

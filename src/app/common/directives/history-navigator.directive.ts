import { Directive, ElementRef, HostListener, Input, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appHistoryNavigator]'
})
export class HistoryNavigatorDirective {
  private history: string[] = [];
  private currentIndex: number = -1;

  constructor(private el: ElementRef, @Optional() private ngModel: NgModel) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.navigateHistory(-1);
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.navigateHistory(1);
      event.preventDefault();
    } else if (event.key === 'Enter') {
      this.currentIndex = -1;
      this.saveCurrentValue();
    }
  }

  @HostListener('input')
  onInput() {
    // Reset the index when the input changes
    this.currentIndex = -1;
  }

  private navigateHistory(direction: number) {
    if (this.history.length === 0) {
      return;
    }

    this.currentIndex = Math.min(Math.max(this.currentIndex + direction, -1), this.history.length - 1);

    const value = this.currentIndex >= 0 ? this.history[this.currentIndex] : '';
    // this.el.nativeElement.value = value;
    if (this.ngModel) {
      this.ngModel.control.setValue(value);
    }
  }

  private saveCurrentValue() {
    const currentValue = this.el.nativeElement.value;
    if (currentValue && (this.history.length === 0 || this.history[this.history.length - 1] !== currentValue)) {
      this.history.unshift(currentValue);
    }
  }
}

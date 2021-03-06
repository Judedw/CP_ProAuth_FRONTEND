import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[positiveNumberAndLetterOnly]"
})
export class PositiveNumberAndLetterOnly {
  // Allow positive number greater than 0
  private regex: RegExp = new RegExp(/^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 ._-]*)$/);
  // private regex: RegExp = new RegExp(/^[a-zA-Z0-9._-]+$/);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ["Backspace", "Tab", "End", "Home"];

  constructor(private el: ElementRef) {}
  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}

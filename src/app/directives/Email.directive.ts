import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: "[emailValidator]"
})
export class EmailValidator{
  // private regex: RegExp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
  private regex: RegExp = new RegExp(/^(?:[A-Za-z]+)(?:[A-Za-z _]*)$/);
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

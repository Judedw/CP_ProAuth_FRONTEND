import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: "[passwordValidator]"
})
export class PasswordValidator{
  private regex: RegExp = new RegExp(/^.{0,12}$/);
  // private regex: RegExp = new RegExp(/^(?:[A-Za-z]+)(?:[A-Za-z _]*)$/);
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

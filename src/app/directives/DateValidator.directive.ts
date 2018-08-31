import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';
import { min } from "date-fns";

@Directive({
  selector: "[dateValidator]"
})
export class DateValidator implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit(){
    this.renderer.setElementProperty(
      this.el.nativeElement,
      "[min]",
      this.dateValidate()
    );
  }

  dateValidate() {
    console.log("date validator");
    const today =  new Date();
    const tomorrow =  new Date(today.setDate(today.getDate() + 1));
    console.log(today)
    console.log(tomorrow)
    return tomorrow;
  }


}

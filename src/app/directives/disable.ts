import { Directive, ElementRef, inject, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class Disable implements AfterViewInit {
  private el = inject(ElementRef);

  constructor() { }

  ngAfterViewInit() {
    setTimeout( () => {
      this.el.nativeElement.setAttribute("id", "noanimation");
    }, 3000);
  }
}

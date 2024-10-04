import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef) {
    this.element.nativeElement.style.backgroundColor = '#FEF5EF'
    this.element.nativeElement.style.border = '#5FB041 1.5px solid'
    this.element.nativeElement.style.borderRadius = '5px'
    this.element.nativeElement.style.padding = '1.5rem'
  }

}

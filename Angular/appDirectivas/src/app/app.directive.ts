import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: "[directiva-basica]"
})

export class DirectivaBasica implements OnInit {

  //una forma corta de declarar variables (private, public)
  constructor(private elemento: ElementRef) {

  }

  ngOnInit() {
    this.elemento.nativeElement.style.backgroundColor = "red";
    this.elemento.nativeElement.style.fontColor = "white";
    this.elemento.nativeElement.style.fontSize = 14;
  }
}
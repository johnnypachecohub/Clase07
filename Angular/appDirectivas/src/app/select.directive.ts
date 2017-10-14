import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective implements OnInit {

  @Input("appSelect") lista: Array<string>

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    this.lista.forEach((item, index) => {
      const option = document.createElement("option")
      option.innerHTML = item

      this.elemento.nativeElement.appendChild(option)
    })
  }
}

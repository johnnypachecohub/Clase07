import { Directive, HostListener, ElementRef, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirectivaAvanzada]'
})
export class DirectivaAvanzadaDirective {
  @Input() colorPorDefecto: string
  @Input() colorHover: string
  @Input("appDirectivaAvanzada") directiva: string
  @Output("fechaHoy") mostrarFecha = new EventEmitter<Date>()

  constructor(private elemento: ElementRef) { }

  //para hacer cambios y propiedades para monitorear el campo
  @HostBinding("style.backgroundColor") colorFondo: string

  @HostListener("mouseenter") mouseenter() {
    //this.elemento.nativeElement.style.backgroundColor = this.directiva; // this.colorHover;
    this.colorFondo = this.directiva

    
    const span = document.createElement("span")
    span.innerHTML = "Etiqueta span"

    this.elemento.nativeElement.appendChild(span)
  }

  @HostListener("mouseleave") mouseleave() {
    this.elemento.nativeElement.style.backgroundColor = this.colorPorDefecto;
    this.mostrarFecha.emit(new Date())
  }
}

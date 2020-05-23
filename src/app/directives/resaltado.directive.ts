import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    console.log('appResaltado: directiva iniciada');
  }
  ///hacemos referencia que le estamos enviando un valor desde afuera
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color: string = 'yellow') {
    this.elementRef.nativeElement.style.backgroundColor = color;

  }


}

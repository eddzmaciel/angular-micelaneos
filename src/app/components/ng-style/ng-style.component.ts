import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
     <h5>140. ngStyle y su uso con directivas de atributos.</h5>
    <p [ngStyle]="{'font-size':'10px;'}">
    Etiqueta utilizando  [ngStyle]
    </p>
    <p [style.fontSize.px]="tamano">
      Etiqueta utilizando [style.fontSize.px] = {{tamano}}
    </p>
    <button class="btn-primary" type="button" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button  class="btn-primary ml-1" type="button" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 30;
  constructor() { }

  ngOnInit() {
  }

}

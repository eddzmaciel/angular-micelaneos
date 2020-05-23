import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  alerta: string = "alert-info"
  loading: boolean;
  propiedades: any = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}

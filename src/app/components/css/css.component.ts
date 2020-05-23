import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
   <h5>141. Aplicando CSS a un sólo componente</h5>
    <p>
      css works!
    </p>
  `,
  styles: [`
    p {
      color:red;
      font-size: 20px;
    }

  ` ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

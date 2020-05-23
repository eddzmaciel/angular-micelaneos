import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(parametros => {
      console.log('ruta PADRE: ', parametros);
    });
  }

  ngOnInit() {
  }

}

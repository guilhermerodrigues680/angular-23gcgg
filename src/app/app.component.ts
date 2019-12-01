import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Registro } from './registro.interface';

import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  registros: Registro;
  error: any;

  constructor (
    private api: ApiService,
    ) { }

  ngOnInit(){
    console.log("app.component works!");   
  }

  /*
  * Funcao que faz a checagem e chamada do cep
  */
  calculaCep(cep:string){
    
    cep = cep.replace("-", "");

    while(cep.indexOf(" ") != -1){
      cep = cep.replace(" ", "");
    }

    // console.log(cep.length);

    if(cep.length == 8){
      console.log(this.api.getDados(cep).subscribe(
      (x: Registro) => {console.log('Observer got a next value: ' + x);
      this.registros = x;
      console.log(JSON.stringify(this.registros));
      },
      (err) => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification'),
    ));  
    } else {
      this.registros = undefined;
    }
    
  }
}

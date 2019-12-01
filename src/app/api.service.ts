import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

private apiRoot = 'https://guilhermerodrigues680.pythonanywhere.com/';
public debug = true;

  constructor(
    private http: HttpClient,
  ) { }

  getDados(cep:string) {
    if(!this.debug){
      return this.http.get(this.apiRoot.concat('registro/'));
    } else {
      return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
      //return this.http.get('https://reqres.in/api/users?page=2');
    }
  }

}
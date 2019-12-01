import { Injectable } from '@angular/core';

//
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

private apiRoot = 'https://guilhermerodrigues680.pythonanywhere.com/';

  constructor(
    private http: HttpClient,
  ) { }

  getDados() {
    return this.http.get(this.apiRoot.concat('registro/'));
  }

}
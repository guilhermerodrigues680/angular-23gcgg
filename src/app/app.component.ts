import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor () { }

  ngOnInit(){
    console.log("app.component works!")
  }
}

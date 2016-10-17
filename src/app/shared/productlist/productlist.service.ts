import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';


@Injectable()

export class ProductlistService {
    config: any;
    constructor(private http: Http) {
      this.http = http;
      console.log('Inside service');
      this.config = this.http.get('https://api.myjson.com/bins/2ex3q');
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatFoodService {

  constructor(public http: HttpClient) { }

  getCatFood() {
    return this.http.get('http://localhost:5000/api/catfood?{}')
  }
}

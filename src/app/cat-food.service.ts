import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CatFoodService {

  constructor(public http: HttpClient) { }

  getCatFood(food) {
    return this.http.get<string[]>(`http://localhost:5000/api/catfood?food=${food}`)
  }
}

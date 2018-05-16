import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getCakes();
  }

  
getCakes(){
  return this._http.get('/cakes');
}

postCake(newCake){
  return this._http.post('/cakes', newCake);
}

cakeRate(id: string, rating) {
  return this._http.post(`/cakes/${id}/rate`, rating);
}

getCakebyId(id: string){
  return this._http.get(`/cakes/${id}`);
}
}

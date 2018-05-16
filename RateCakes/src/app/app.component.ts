import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Cakes';
  cakes = [];
  newCake = {};
  showCake = [];
  // cakeRating ={};



  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getCakesFromService();
  }

  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got our cakes!", data)
      this.cakes = data['data'];
      // this.cakeRating = {};
    });
}
createCake(){
  console.log('creating a new Cake');
  let observable = this._httpService.postCake(this.newCake);
    observable.subscribe(data => {
  this.newCake = {};
  this.getCakesFromService();
    })
}

rateCake(id: string, form){
  console.log('creating a new Cake Rating');
  let cakeRating = {
    rating: form.controls['rating']['value'],
    comment: form.controls['comment']['value']
  }
  this._httpService.cakeRate(id, cakeRating).subscribe(data => {
  this.getCakesFromService();
  })
}

showCakes(cake){
  console.log('got cake');
  this.showCake = cake;
}

}

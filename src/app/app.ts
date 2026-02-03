import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
city: string='';
details:any={};
constructor(public hc:HttpClient){}
getWeather(){
  this.hc.get(`https://api.weatherapi.com/v1/current.json?key=be96115c8a3b4ab7b2655227252807&q=%22${this.city}%22`)
  .subscribe((res:any)=>{
    this.details = res.
    current;
  this.city=''})
}
}

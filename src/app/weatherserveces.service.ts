import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherservecesService {
  private apikey = 'f692bf9c69dc4e72bd0102100250202'
  private apiurl = 'http://api.weatherapi.com/v1/current.json'
  constructor(){}

  fetchWeather(city:string): Promise<any>{
      return fetch(`${this.apiurl}?key=${this.apikey}&q=${city}`)
      .then(response=>{
          return response.json()
      })
      .then(data => data)
  }

}

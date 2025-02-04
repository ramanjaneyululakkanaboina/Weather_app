import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherservecesService } from './weatherserveces.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='weather app';
  city:string='';
  dcity:string='';
  name:string='';
  temp_c:string='' ;
  wind:string='';
  preassure:string='';
  humididty:string='';
  img:string=''
  text:string=''
  
  setcity(event:any){
    this.city=event.target.value
  }

  constructor(private weather:WeatherservecesService){}
 
  checkweather(){
    
   
    this.weather.fetchWeather(this.city)
    .then(data=>{
      this.dcity=this.city
      this.name=data.location.name
      this.img = data.current.condition.icon
      this.temp_c="Temperature: " +data.current.temp_c +"°C"
      this.wind="Wind Speed:" + data.current.wind_kph +" km/hr"
      this.preassure='Preassure: '+ data.current.pressure_mb+' mb'
      this.humididty="Humidity: "+data.current.humidity+ ' %'
      this.text=data.condition.text

    })
    this.dcity=this.city
    let v:any = document.getElementById('inp')
    v.value=''
    this.city=''
   
    }
    
  }
  
 


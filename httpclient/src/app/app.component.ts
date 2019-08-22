import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httpclient';
  WEATHER_API_KEY = "476e23fe1116f4e69d2a3e68672604e1"
  model = new Weather(0,0,0,'',0,0);
  constructor(private weatherSvc: WeatherService){

  }

  ngOnInit(){
    console.log("retrieve weather !")
    this.weatherSvc.getWeather("Singapore", this.WEATHER_API_KEY).then((result)=>{
      console.log(result);
      console.log(result.main);
      this.model = new Weather(result.main.temp,result.main.pressure,result.main.humidity,result.weather[0].description,result.wind.deg,result.wind.speed);
  
      //console.log()
    }).catch((error)=>{
      console.log(error);
    })
  }
}

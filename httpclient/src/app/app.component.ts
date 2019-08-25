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
  model = new Weather('Singapore', 0,0,0,'',0,0);
  imageUrl = "https://www.nea.gov.sg/assets/images/map/base-853.png";
  countries = [
    {countryName: 'Singapore', city: 'Singapore'},
    {countryName: 'Malaysia', city: 'Kuala Lumpur'},
    {countryName: 'China', city: 'Beijing'},
    {countryName: 'India', city: 'New Delhi'}
  ]

  imgMapBasedCity = [
    {city: 'Singapore', imageUrl: 'https://www.nea.gov.sg/assets/images/map/base-853.png'},
    {city: 'Kuala Lumpur', imageUrl: 'https://www.researchgate.net/profile/Wee_Boon_Siong/publication/283298104/figure/fig1/AS:614058734673920@1523414419040/Location-of-sampling-site-at-the-Klang-Valley-Source.png'},
    {city: 'Beijing', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Beijing_in_China_%28%2Ball_claims_hatched%29.svg/1200px-Beijing_in_China_%28%2Ball_claims_hatched%29.svg.png'},
    {city: 'New Delhi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Location_map_India_Delhi_EN.svg/1200px-Location_map_India_Delhi_EN.svg.png'}
  ]
  constructor(private weatherSvc: WeatherService){

  }

  ngOnInit(){
    console.log("retrieve weather !")
    this.getWeatherFromAPI(this.model.city);
  }

  getWeatherFromAPI(city: string){
    Object.keys(this.imgMapBasedCity).find(value=>{
      console.log(value);
      if(this.imgMapBasedCity[value].city === city){
        this.imageUrl = this.imgMapBasedCity[value].imageUrl;
      }
    })
    this.weatherSvc.getWeather(city, this.WEATHER_API_KEY).then((result)=>{
      console.log(result);
      console.log(result.main);
      this.model = new Weather(this.model.city, result.main.temp,result.main.pressure,result.main.humidity,result.weather[0].description,result.wind.deg,result.wind.speed);
    }).catch((error)=>{
      console.log(error);
    })
  }

  fetchWeatherByCity(event){
    console.log("fetchWeatherByCity");
    console.log(event);
    console.log(event.target.value);
    this.getWeatherFromAPI(event.target.value);
  }
}

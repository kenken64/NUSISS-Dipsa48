import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string, key: string): Promise<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', key);
    return (
      this.httpClient.get('http://api.openweathermap.org/data/2.5/weather',
      { params: params })
      .toPromise()
    );
  }
}

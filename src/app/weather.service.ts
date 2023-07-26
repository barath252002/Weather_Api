//2

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //this service file will have all the details of API
  //inject httplcient into constructor.
  constructor(private http : HttpClient) { }

  getweather(city : string){ //get from external API
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=43dee1b5a5554222ee295b88a7a573bf&units=metric')
  }
}

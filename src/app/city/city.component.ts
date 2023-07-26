import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit{

  audio = new Audio("../assets/mixkit-game-click-1114.wav");

  //inject the http service using constructor
  //get the class 'WeatherService' by importing.
  //assign that class to local private variable.
  myWeather : any;
  mytemperature : number = 0;
  mymin : number = 0;
  mymax : number = 0;
  myhumidity : number = 0;
  mywindspeed : number = 0;
  mydescription : string = '';
  myname : string = '';
  myicon : string = '';
  c : string = '';
  cityName : string ='';


  constructor(private weatherService : WeatherService){}

  ngOnInit() : void{ //this loads first. because of this only on start itself we get 'bangalore's data.

    if(this.c == '') this.cityName = 'bangalore';
else this.cityName = this.c;
    this.getWeatherData(this.cityName);

  }


  onsubmit(city : string){ //this method is called when we hit enter after filling the city name in form.
    if(this.c == '') this.cityName = 'bangalore';
    else this.cityName = this.c;
    this.audio.play();
    this.getWeatherData(this.cityName); //we'll get the city value that the user is searching
    this.cityName = '';
  }

  private getWeatherData(cityName:string){



    this.weatherService.getweather(cityName).subscribe({

      //subscribe{} function will have next, error, complete values.
            next : (res)=>{
              // console.log(res);
              this.myWeather = res;
              // console.log(this.myWeather);
              //assigning the values to the variables of this class from the API.
              //then we can use these variables on html.
              this.mytemperature = this.myWeather.main.temp;
              this.mymin = this.myWeather.main.temp_min;
              this.mymax = this.myWeather.main.temp_max;
              this.myhumidity = this.myWeather.main.humidity;
              this.mywindspeed = this.myWeather.wind.speed
              this.mydescription = this.myWeather.weather[0].main;
              this.myname = this.myWeather.name;
              this.myicon = "https://openweathermap.org/img/wn/" + this.myWeather.weather[0].icon + "@2x.png"

            },

            error: (error) => console.log(error.message),

            complete : () => console.info('API call completed')


          })
  }

}

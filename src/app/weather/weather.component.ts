import { WeatherApiService } from './../weather-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: any;

  constructor(private WeatherApiService: WeatherApiService) { }

  ngOnInit()  {
    this.getweatherData('Toledo');
  }

  getweatherData(city: string){
    this.WeatherApiService.getWeather(city)
    .then(response =>  {
      this.weatherData = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  }

}

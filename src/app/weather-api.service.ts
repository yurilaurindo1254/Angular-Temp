import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = '0729cc4acceb709e940956d4e7e8a20d';

  constructor() { }

  getWeather(city: string) {
    const url = '`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`'
    return axios.get(url);
  }
}

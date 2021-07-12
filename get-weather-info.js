class GetWeatherInfo {
  async getData(cityName) {
    const ApiKey = "5077aa228bc9442ba835c88b15a80917";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`;

    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
}

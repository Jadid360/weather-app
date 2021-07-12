class WeatherUI {
  constructor() {
    this.cityName = document.querySelector("#city-name");
    this.weather = document.querySelector("#weather");
    this.weatherType = document.querySelector("#weather-type");
    this.weatherImage = document.querySelector("#weather-image");
    this.weatherArea = document.querySelector("#weather-area");
  }

  setUi(data) {
    this.weatherImage.classList.remove("add");
    this.weatherArea.style.display = "block";
    const httpCode = parseInt(data.cod);
    if (httpCode === 200) {
      const kelvinToCelsius = data.main.temp - 273;

      this.cityName.textContent = data.name;
      this.weather.textContent = kelvinToCelsius.toFixed(2);
      this.weatherType.textContent = data.weather[0].main;
    } else {
      const msz = `Please check the city name & 
      Try Again!!!`;

      this.cityName.textContent = msz;
      this.cityName.classList.add("text-warning");
      this.weatherArea.style.display = "none";
      this.weatherType.style.display = "none";
      this.weatherImage.style.display = "none";
    }
  }
}

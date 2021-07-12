const userInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const getWeatherData = new GetWeatherInfo();
const weatherUi = new WeatherUI();

searchBtn.addEventListener("click", () => {
  const cityName = userInput.value;

  getWeatherData.getData(cityName.trim()).then((data) => {
    weatherUi.setUi(data);
  });

  userInput.value = "";
});

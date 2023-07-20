// PART 1: SHOW A FORTUNE

function showFortune() {
  fetch('/fortune')
    .then((response) => response.text())
    .then((fortuneData) => document.querySelector('#fortune-text').innerHTML = fortuneData);
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`;
  
  fetch(url)
    .then((response) => response.json())
    .then((weatherData) => {
      document.querySelector('#weather-info').innerText = weatherData.forecast;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

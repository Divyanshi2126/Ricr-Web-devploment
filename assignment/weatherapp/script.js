async function getweather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoloc(city);

  const response =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2c51eecc9de88168186be39e4211f8d9
`);
  const data = await response.json();

  document.getElementById("Weatherdata").innerHTML = `
   <div>
            <p>Temprature : ${(data.main.temp - 273.14).toFixed(2)}</p>
            <p>humidity : ${data.main.humidity}%</p>
            <p>description : ${data.weather[0].description}</p>
          </div>
          <img src=" https://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@4x.png" alt="weathericon" />
  
  `;
}

async function getGeoloc(city) {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2c51eecc9de88168186be39e4211f8d9`
  );
  const data = await response.json();

  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "7aefa0a3cfca43a0524f746cddf2458e"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  const resultBox = document.getElementById("result");

  if (data.cod === 200) {
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    resultBox.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="${iconUrl}" alt="${data.weather[0].main}" />
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
  } else {
    resultBox.innerHTML = `<p>❌ City not found. Try again!</p>`;
  }
}


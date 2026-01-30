function showweatherDetails(event) {
  event.preventDefault();

  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;
  const apiKey = "029310777f3c869cd619e8af10f57a5e"; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);

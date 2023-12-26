function getWeather () {
    const latIn = document.getElementById('latIn');
    const lonIn = document.getElementById('lonIn');
    var lat = latIn.value;
    var long = lonIn.value;

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = document.getElementById("apiKey");
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey.value}&units=metric`;
    //const apiUrlReverse = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit={limit}&appid=${apiKey.value}`;
    //const apiUrlByLoc = `http://api.openweathermap.org/geo/1.0/direct?q={cityname}&limit={limit}&appid=${apiKey.value}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Process the data and update the UI
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error.message);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Temperature: ${data.main.temp} °C</p>
                             <p>Weather: ${data.weather[0].description}</p>`;
}

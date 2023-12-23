function getWeather () {
    const latIn = document.getElementById('latIn');
    const lonIn = document.getElementById('lonIn');
    var lat = latIn.value;
    var long = lonIn.value;

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '0c8b9491574113f197b7d7f5a3835535';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

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

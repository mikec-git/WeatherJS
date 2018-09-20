class UI {
    constructor(){
        this.location   = document.querySelector('#w-location');
        this.desc       = document.querySelector('#w-desc');
        this.string     = document.querySelector('#w-string');
        this.icon       = document.querySelector('#w-icon');
        this.details    = document.querySelector('#w-details');
        this.humidity   = document.querySelector('#w-humidity');
        this.visibility = document.querySelector('#w-visibility');
        this.clouds     = document.querySelector('#w-clouds');
        this.wind       = document.querySelector('#w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name + ", " + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.innerHTML = (weather.main.temp-273.15).toFixed(2)  + '&deg;C';
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.visibility.textContent = `visibility: ${(weather.visibility/1000).toFixed(2)} km`;
        this.clouds.textContent = `Cloudiness: ${weather.clouds.all}%`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed*3.6} kph`;
    }

}
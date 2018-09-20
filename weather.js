class Weather{
    constructor(city, country){
        this.apiKey = '8b51f7b93e6ff54b3f0b62ad707ca705';
        this.city = city;
        this.country = country;
    }

    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}
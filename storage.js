class Storage {
    constructor(){
        this.city;
        this.country;
        this.defaultCity = 'Vancouver';
        this.defaultCountry = 'CA';
    }

    getLocationData(){
        this.city = (localStorage.getItem('city') === null) ? this.defaultCity : localStorage.getItem('city');

        this.country = (localStorage.getItem('country') === null) ? this.defaultCountry : localStorage.getItem('country');
        
        return {
            city: this.city,
            country: this.country
        };
    }

    setLocationData(city, country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('#w-change-btn').addEventListener('click', () => {
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    if(city !== '' && country !== ''){
        weather.changeLocation(city,country);
        storage.setLocationData(city, country);
        getWeather();
        $('#locModal').modal('hide');
    }
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
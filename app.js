
const changeBtn = document.querySelector('#w-change-btn');
const weather = new Weather('vancouver', 'ca');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

changeBtn.addEventListener('click', () => {
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    if(city !== '' && country !== ''){
        
    }

});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
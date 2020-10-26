'use strict';

const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('./yargsConfig').argv;

const getInfo = async (adress) => {

        const city = await place.getPlaceLatLong(adress);
        const celcius = await weather.getWeather(city.lat, city.lon);

        return ` The weather on ${city.place} is ${celcius} `
        
}

getInfo(argv.adress)        
        .then(console.log)
        .catch(console.log);

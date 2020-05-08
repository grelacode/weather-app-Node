const axios = require('axios');



const getWeather = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=748cc262fc98c13bdef35711a57e138d`)
    return resp.data.main.temp;

}

getWeather(40.7128, 74.0060)


module.exports = {
    
    getWeather

}
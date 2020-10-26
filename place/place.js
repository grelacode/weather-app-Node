'use strict';

const axios = require('axios');

const getPlaceLatLong = async (adress) => {

    const encodeUlr = encodeURI(adress);    

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: {'x-rapidapi-key': '28b8e75ccemshac3136b19b8f913p1be56ajsnbfc031be3646'}
      });
    
      const resp = await instance.get();

      if (resp.data.Results.length === 0) {
          throw new Error(`There is not any results for ${adress}`)
      }

      const data = resp.data.Results[0];
      const place = data.name;
      const lat = data.lat;
      const lon = data.lon;
      
    return {
        place,
        lat,
        lon
    }

}

module.exports = {
    getPlaceLatLong
}

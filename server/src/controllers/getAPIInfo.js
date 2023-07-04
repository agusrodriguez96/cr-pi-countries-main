const { Country } = require ("../db.js");
const axios = require ("axios");

const getApiInformation = async () => {
    
        const response = await axios.get("http://localhost:5000/countries")
        const countries = response.data;
    
        const mapInfo = countries.map((country) => ({
          id: country.cca3,
          name: country.name.common,
          flag: country.flags.png,
          continent: country.continents && country.continents.length > 0 ? country.continents[0] : null,
          capital: country.capital && country.capital.length > 0 ? country.capital[0] : null,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        }));
    
        
        await guardarInfo(mapInfo);
    
        return mapInfo;
      
};

 const guardarInfo = async (mapInfo) => {
    
      const aux = await mapInfo.map((info) =>
        Country.findOrCreate({
          where: {
            name: info.name,
            id: info.id,
          },
          defaults: {
            continent: info.continent,
            flag: info.flag,
            capital: info.capital,
            subregion: info.subregion,
            area: info.area,
            population: info.population,
          },
        })
      );
  
      return aux
  };


module.exports = { getApiInformation }





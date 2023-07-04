const { getBdInfo} = require("./getBdInfo")



const countryByIdController = async (req, res) => {
const { idPais } = req.params;
const allCountries = await getBdInfo();

if (idPais) {
  const idCountry = allCountries.filter(country => country.id === idPais.toUpperCase());

  if (idCountry.length) {
    res.status(200).json(idCountry);
  } else {
    res.status(404).json({ error: "No se encontró un país con ese ID"});
  }
}
     
};

module.exports= {
    countryByIdController
}
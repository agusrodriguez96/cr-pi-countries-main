const { countryByIdController } = require("../controllers/countryByIdController");
const { countryByNameController } = require("../controllers/countryByNameController");
const { getBdInfo } = require ("../controllers/getBdInfo")

const countriesHandler = async (req, res) => {
try {
    let todosLosPaises = await getBdInfo()
    res.status(200).json(todosLosPaises)

}catch (error){
    res.status(400).json({error: "No se pudo obtener información de los países"})
}
};

const countryById = async (req, res) => {
    const { idPais } = req.params;
    try {
        await countryByIdController(req, res)
    }
    catch (error){
    res.status(400).json({error: "No encontramos un país con este ID"})
    }
};

const countryByName = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const queryName = await countryByNameController(name);
        res.status(200).send(queryName);
      } else {
        const allCountries = await getBdInfo();
        res.status(200).send(allCountries);
      }
    } catch (error) {
      res.status(500).send({error: "No existe un país con ese nombre"});
    }
  };



module.exports = {
    countriesHandler,
    countryById,
    countryByName
}



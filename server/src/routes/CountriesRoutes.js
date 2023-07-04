const { Router } = require("express")
const router = Router ();
const { countriesHandler, countryById, countryByName } = require("../handlers/countriesHandlers");


router.get("/", countriesHandler)

router.get("/name", countryByName)

router.get("/:idPais", countryById)





module.exports = router;
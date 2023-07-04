const { Router } = require("express");

const router = Router();

const countriesRouter = require ("./CountriesRoutes")
const activitiesRouter = require ("./ActivitiesRoutes")


router.use("/countries", countriesRouter)

router.use("/activities", activitiesRouter)


module.exports = router;

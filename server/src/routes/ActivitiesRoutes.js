const express = require("express")
const router = express.Router()
const { postActivitiesHandler, getActivitiesHandler } = require("../handlers/activitiesHandlers")



router.post("/", postActivitiesHandler)

router.get("/", getActivitiesHandler)


module.exports= router;
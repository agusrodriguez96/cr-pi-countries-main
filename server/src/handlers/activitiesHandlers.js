const { postActivitiesController } = require("../controllers/postActivitiesController")
const { getActivities } = require("../controllers/getActivities")


const postActivitiesHandler = async (req, res) => {
const  {name, difficulty, season, duration, countries} = req.body;
    if(!name || !difficulty || !season || !duration || !countries) throw Error ("Todos los datos son obligatorios");
    try{
        const resultado = await postActivitiesController({
            name,
            difficulty,
            season,
            duration,
            countries
        });
        res.status(201).json({ message: "La actividad fue creada", result: resultado });
    }
    catch(error){
         res.status(400).json({ details: "Ocurrió un error al postear la actividad" })
    } 

};



const getActivitiesHandler = async (req, res) => {
try {
  const allActivities = await getActivities()
  res.status(200).json(allActivities)

}catch (error) {
   res.status(400).json(error.message)

}

};


module.exports= {
    postActivitiesHandler,
    getActivitiesHandler
}





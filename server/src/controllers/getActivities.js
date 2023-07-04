const { Activity, Country } = require("../db.js")


const getActivities = async () => {
    const aux = await Activity.findAll({
        include: {
            model: Country,
            attributes: ["id", "name", "capital"],
            through: {
                attributes: [],
            },
        }
    });
       return aux 
};

module.exports= {
    getActivities,
}

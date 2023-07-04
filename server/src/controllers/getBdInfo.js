const {Country, Activity} = require("../db.js") 
const { getApiInformation } = require ("./getAPIInfo.js")


const getBdInfo = async () => {
    await getApiInformation()
    const aux = await Country.findAll({
        include: {
            model: Activity,
            attributes: ["id", "name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            }
        }
    }) 
    return aux; 
};

module.exports= {
    getBdInfo,
}
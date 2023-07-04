const { Country, Activity } = require("../db.js")
const { Op } = require("sequelize")

const countryByNameController = async (name) => {
        const countryFound = await Country.findAll({ 
          where: { 
            name: { 
              [Op.iLike]: `%${name}%`, 
            }, 
          }, 
          include: { 
            model: Activity, 
            through: { attributes: [] }, 
          }, 
        }); 
        return countryFound; 
      };

module.exports= {
    countryByNameController
}

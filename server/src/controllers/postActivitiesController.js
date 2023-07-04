const { Activity, Country } = require("../db.js")


const postActivitiesController = async ({
    name,
    difficulty,
    season,
    duration,
    countries
  }) => {
    const activityExists = await Activity.findOne({ where: { name: name } });
    if (activityExists) {
      for (let i = 0; i < countries.length; i++) {
        const eachCountry = countries[i];
        const country = await Country.findByPk(eachCountry);
        if (!country) {
          throw new Error("Country not found");
        }
        await activityExists.addCountry(country); // Añadir el país a la actividad usando el método addCountry
      };
  
      return activityExists;
    } else {
      const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
  
      for (let i = 0; i < countries.length; i++) {
        const eachCountry = countries[i];
        const country = await Country.findByPk(eachCountry);
        if (!country) {
          throw new Error("Country not found");
        }
        await createActivity.addCountry(country); // Añadir el país a la actividad usando el método addCountry
      };
  
      return createActivity;
    }
  
  };

   module.exports= {
    postActivitiesController
   }

   
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        isThreeLetters(value) {
          if(value.length !== 3) {
            throw new Error ("El ID de búsqueda del país debe ser un código de tres letras")
          }
        }
      }
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
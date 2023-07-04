const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Activity", {
    
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.INTEGER,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false
    }

    });
};



const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trip_bought: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'traveller',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'location',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;

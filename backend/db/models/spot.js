'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.hasMany(
        models.Booking,
        { foreighKey: 'spotId', onDelete: 'cascade' }
      );
      Spot.hasMany(
        models.SpotImage,
        { foreighKey: 'spotId', onDelete: 'cascade' }
      );
      Spot.hasMany(
        models.Review,
        { foreighKey: 'spotId', onDelete: 'cascade' }
      );
      Spot.belongsTo(
        models.User,
        { foreighKey: 'ownerId' }
      )
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: { model: 'Users' }
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      validate: {
        min: -90,
        max: 90
      }
    },
    lng: {
      type: DataTypes.DECIMAL,
      validate: {
        min: -180,
        max: 180
      }
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Spot',
    validate: {
      bothCoordsOrNone() {
        if ((this.lat === null) !== (this.lng === null)) {
          throw new Error('Either both latitude and longitude, or neither!');
        }
      }
    }
  });
  return Spot;
};

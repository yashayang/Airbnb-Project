'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    toSafeObject() {
     const { id, url, preview } = this;
     return { id, url, preview };
    }

    static associate(models) {
      // define association here
      SpotImage.belongsTo(
        models.Spot,
        { foreignKey: 'spotId' }
      )
    }
  }
  SpotImage.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Spots' }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    preview: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'SpotImage',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "spotId"]
      }
    },
    scopes: {
      spotImg: {
        attributes: {
          exclude: ["createdAt", "updatedAt", "spotId"]
        }
      }
    }
  });
  return SpotImage;
};

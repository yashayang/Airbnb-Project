'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        onDelete: 'cascade',
        references: { model: 'Users', key: 'id' }
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      lat: {
        type: Sequelize.DECIMAL(10,8),
        unique: true,
        allowNull: false
      },
      lng: {
        type: Sequelize.DECIMAL(11,8),
        unique: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Spots');
  }
};

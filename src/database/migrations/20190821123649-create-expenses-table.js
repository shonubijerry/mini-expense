export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Expenses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    userId: {
      allowNull: false,
      foreignKey: true,
      type: Sequelize.UUID,
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    vat: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    reason: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  }),
  down: queryInterface => queryInterface.dropTable('Expenses')
};

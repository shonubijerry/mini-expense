export default (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.UUID,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    vat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  return Expense;
};

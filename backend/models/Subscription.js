module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clinicId: {
      type: DataTypes.INTEGER,
      field: 'clinic_id',
      allowNull: false
    },
    plan: {
      type: DataTypes.ENUM('free', 'pro'),
      defaultValue: 'free'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATEONLY,
      field: 'end_date'
    },
    amount: DataTypes.DECIMAL(10, 2),
    features: DataTypes.JSON,
    status: {
      type: DataTypes.ENUM('active', 'expired', 'canceled'),
      defaultValue: 'active'
    }
  }, {
    tableName: 'subscriptions',
    timestamps: true,
    underscored: true
  });

  return Subscription;
};
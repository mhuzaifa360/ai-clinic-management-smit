module.exports = (sequelize, DataTypes) => {
  const Clinic = sequelize.define('Clinic', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      validate: { isEmail: true }
    },
    phone: DataTypes.STRING(20),
    address: DataTypes.TEXT,
    logoUrl: {
      type: DataTypes.STRING(500),
      field: 'logo_url'
    },
    subscriptionPlan: {
      type: DataTypes.ENUM('free', 'pro'),
      defaultValue: 'free',
      field: 'subscription_plan'
    },
    patientLimit: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      field: 'patient_limit'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_active'
    }
  }, {
    tableName: 'clinics',
    timestamps: true,
    underscored: true
  });

  return Clinic;
};
module.exports = (sequelize, DataTypes) => {
  const Analytics = sequelize.define('Analytics', {
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    totalAppointments: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'total_appointments'
    },
    totalPatients: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'total_patients'
    },
    totalPrescriptions: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'total_prescriptions'
    },
    aiUsageCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'ai_usage_count'
    },
    revenue: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    }
  }, {
    tableName: 'analytics',
    timestamps: true,
    underscored: true
  });

  return Analytics;
};
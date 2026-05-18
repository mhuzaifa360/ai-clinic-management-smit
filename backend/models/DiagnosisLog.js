module.exports = (sequelize, DataTypes) => {
  const DiagnosisLog = sequelize.define('DiagnosisLog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patientId: {
      type: DataTypes.INTEGER,
      field: 'patient_id',
      allowNull: false
    },
    doctorId: {
      type: DataTypes.INTEGER,
      field: 'doctor_id',
      allowNull: false
    },
    symptoms: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    possibleConditions: {
      type: DataTypes.JSON,
      field: 'possible_conditions',
      defaultValue: []
    },
    suggestedTests: {
      type: DataTypes.JSON,
      field: 'suggested_tests',
      defaultValue: []
    },
    riskLevel: {
      type: DataTypes.ENUM('Low', 'Medium', 'High'),
      field: 'risk_level'
    },
    aiResponse: {
      type: DataTypes.JSON,
      field: 'ai_response'
    }
  }, {
    tableName: 'diagnosis_logs',
    timestamps: true,
    underscored: true
  });

  return DiagnosisLog;
};
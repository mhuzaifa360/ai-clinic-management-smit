module.exports = (sequelize, DataTypes) => {
  const Prescription = sequelize.define('Prescription', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    prescriptionId: {
      type: DataTypes.STRING(50),
      field: 'prescription_id',
      unique: true
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
    diagnosis: DataTypes.TEXT,
    medicines: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    tests: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    advice: DataTypes.TEXT,
    aiExplanation: {
      type: DataTypes.TEXT,
      field: 'ai_explanation'
    },
    urduExplanation: {
      type: DataTypes.TEXT,
      field: 'urdu_explanation'
    },
    lifestyleRecommendations: {
      type: DataTypes.JSON,
      field: 'lifestyle_recommendations',
      defaultValue: []
    },
    riskFlags: {
      type: DataTypes.JSON,
      field: 'risk_flags',
      defaultValue: []
    },
    pdfUrl: {
      type: DataTypes.STRING(500),
      field: 'pdf_url'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_active'
    }
  }, {
    tableName: 'prescriptions',
    timestamps: true,
    underscored: true
  });

  return Prescription;
};
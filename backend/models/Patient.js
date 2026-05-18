module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      unique: true,
      references: { model: 'users', key: 'id' }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    age: DataTypes.INTEGER,
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other')
    },
    bloodGroup: {
      type: DataTypes.STRING(5),
      field: 'blood_group'
    },
    contact: DataTypes.STRING(20),
    emergencyContact: {
      type: DataTypes.STRING(20),
      field: 'emergency_contact'
    },
    address: DataTypes.TEXT,
    medicalHistory: {
      type: DataTypes.JSON,
      field: 'medical_history',
      defaultValue: []
    },
    chronicConditions: {
      type: DataTypes.JSON,
      field: 'chronic_conditions',
      defaultValue: []
    },
    allergies: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    clinicId: {
      type: DataTypes.INTEGER,
      field: 'clinic_id',
      references: { model: 'clinics', key: 'id' }
    },
    registeredById: {
      type: DataTypes.INTEGER,
      field: 'registered_by_id',
      references: { model: 'users', key: 'id' }
    }
  }, {
    tableName: 'patients',
    timestamps: true,
    underscored: true
  });

  return Patient;
};
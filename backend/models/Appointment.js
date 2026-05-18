module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
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
    appointmentDate: {
      type: DataTypes.DATEONLY,
      field: 'appointment_date',
      allowNull: false
    },
    appointmentTime: {
      type: DataTypes.TIME,
      field: 'appointment_time',
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
      defaultValue: 'pending'
    },
    symptoms: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    createdById: {
      type: DataTypes.INTEGER,
      field: 'created_by_id',
      references: { model: 'users', key: 'id' }
    }
  }, {
    tableName: 'appointments',
    timestamps: true,
    underscored: true
  });

  return Appointment;
};
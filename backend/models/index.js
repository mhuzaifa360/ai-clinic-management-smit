const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// Import Models
const Clinic = require('./Clinic')(sequelize, DataTypes);
const User = require('./User')(sequelize, DataTypes);
const Patient = require('./Patient')(sequelize, DataTypes);
const Appointment = require('./Appointment')(sequelize, DataTypes);
const Prescription = require('./Prescription')(sequelize, DataTypes);
const DiagnosisLog = require('./DiagnosisLog')(sequelize, DataTypes);
const Subscription = require('./Subscription')(sequelize, DataTypes);
const Analytics = require('./Analytics')(sequelize, DataTypes);

// ========== ASSOCIATIONS ==========

// Clinic - User
Clinic.hasMany(User, { foreignKey: 'clinicId' });
User.belongsTo(Clinic, { foreignKey: 'clinicId' });

// Clinic - Patient
Clinic.hasMany(Patient, { foreignKey: 'clinicId' });
Patient.belongsTo(Clinic, { foreignKey: 'clinicId' });

// User - Patient (Registration)
User.hasMany(Patient, { as: 'RegisteredPatients', foreignKey: 'registeredById' });
Patient.belongsTo(User, { as: 'registeredBy', foreignKey: 'registeredById' });

// Patient - User (Patient account)
User.hasOne(Patient, { foreignKey: 'userId' });
Patient.belongsTo(User, { foreignKey: 'userId' });

// Appointment - Patient
Patient.hasMany(Appointment, { foreignKey: 'patientId' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

// Appointment - Doctor
User.hasMany(Appointment, { as: 'DoctorAppointments', foreignKey: 'doctorId' });
Appointment.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' });

// Prescription - Patient
Patient.hasMany(Prescription, { foreignKey: 'patientId' });
Prescription.belongsTo(Patient, { foreignKey: 'patientId' });

// Prescription - Doctor
User.hasMany(Prescription, { as: 'DoctorPrescriptions', foreignKey: 'doctorId' });
Prescription.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' });

// DiagnosisLog - Patient
Patient.hasMany(DiagnosisLog, { foreignKey: 'patientId' });
DiagnosisLog.belongsTo(Patient, { foreignKey: 'patientId' });

// DiagnosisLog - Doctor
User.hasMany(DiagnosisLog, { as: 'DoctorDiagnosis', foreignKey: 'doctorId' });
DiagnosisLog.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' });

// Subscription - Clinic
Clinic.hasOne(Subscription, { foreignKey: 'clinicId' });
Subscription.belongsTo(Clinic, { foreignKey: 'clinicId' });

// Analytics - Clinic
Clinic.hasMany(Analytics, { foreignKey: 'clinicId' });
Analytics.belongsTo(Clinic, { foreignKey: 'clinicId' });

module.exports = {
  sequelize,
  Clinic,
  User,
  Patient,
  Appointment,
  Prescription,
  DiagnosisLog,
  Subscription,
  Analytics
};
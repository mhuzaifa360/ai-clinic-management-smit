module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      validate: { is: /^[0-9+\-\s]+$/ }
    },
    role: {
      type: DataTypes.ENUM('admin', 'doctor', 'receptionist', 'patient'),
      defaultValue: 'patient'
    },
    profilePic: {
      type: DataTypes.STRING(500),
      field: 'profile_pic'
    },
    clinicId: {
      type: DataTypes.INTEGER,
      field: 'clinic_id',
      references: { model: 'clinics', key: 'id' }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_active'
    },
    lastLogin: {
      type: DataTypes.DATE,
      field: 'last_login'
    }
  }, {
    tableName: 'users',
    timestamps: true,
    underscored: true
  });

  return User;
};
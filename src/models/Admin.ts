import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Staff, StaffId } from './Staff';
import type { personalInfo, personalInfoId } from './personalInfo';

export interface AdminAttributes {
  adminId: number;
  personalId?: number;
}

export type AdminPk = "adminId";
export type AdminId = Admin[AdminPk];
export type AdminOptionalAttributes = "adminId" | "personalId";
export type AdminCreationAttributes = Optional<AdminAttributes, AdminOptionalAttributes>;

export class Admin extends Model<AdminAttributes, AdminCreationAttributes> implements AdminAttributes {
  adminId!: number;
  personalId?: number;

  // Admin hasMany Staff via adminId
  Staffs!: Staff[];
  getStaffs!: Sequelize.HasManyGetAssociationsMixin<Staff>;
  setStaffs!: Sequelize.HasManySetAssociationsMixin<Staff, StaffId>;
  addStaff!: Sequelize.HasManyAddAssociationMixin<Staff, StaffId>;
  addStaffs!: Sequelize.HasManyAddAssociationsMixin<Staff, StaffId>;
  createStaff!: Sequelize.HasManyCreateAssociationMixin<Staff>;
  removeStaff!: Sequelize.HasManyRemoveAssociationMixin<Staff, StaffId>;
  removeStaffs!: Sequelize.HasManyRemoveAssociationsMixin<Staff, StaffId>;
  hasStaff!: Sequelize.HasManyHasAssociationMixin<Staff, StaffId>;
  hasStaffs!: Sequelize.HasManyHasAssociationsMixin<Staff, StaffId>;
  countStaffs!: Sequelize.HasManyCountAssociationsMixin;
  // Admin hasMany personalInfo via adminId
  personalInfos!: personalInfo[];
  getPersonalInfos!: Sequelize.HasManyGetAssociationsMixin<personalInfo>;
  setPersonalInfos!: Sequelize.HasManySetAssociationsMixin<personalInfo, personalInfoId>;
  addPersonalInfo!: Sequelize.HasManyAddAssociationMixin<personalInfo, personalInfoId>;
  addPersonalInfos!: Sequelize.HasManyAddAssociationsMixin<personalInfo, personalInfoId>;
  createPersonalInfo!: Sequelize.HasManyCreateAssociationMixin<personalInfo>;
  removePersonalInfo!: Sequelize.HasManyRemoveAssociationMixin<personalInfo, personalInfoId>;
  removePersonalInfos!: Sequelize.HasManyRemoveAssociationsMixin<personalInfo, personalInfoId>;
  hasPersonalInfo!: Sequelize.HasManyHasAssociationMixin<personalInfo, personalInfoId>;
  hasPersonalInfos!: Sequelize.HasManyHasAssociationsMixin<personalInfo, personalInfoId>;
  countPersonalInfos!: Sequelize.HasManyCountAssociationsMixin;
  // Admin belongsTo personalInfo via personalId
  personal!: personalInfo;
  getPersonal!: Sequelize.BelongsToGetAssociationMixin<personalInfo>;
  setPersonal!: Sequelize.BelongsToSetAssociationMixin<personalInfo, personalInfoId>;
  createPersonal!: Sequelize.BelongsToCreateAssociationMixin<personalInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Admin {
    return Admin.init({
    adminId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    personalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personalInfo',
        key: 'uid'
      }
    }
  }, {
    sequelize,
    tableName: 'Admin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Admin",
        unique: true,
        fields: [
          { name: "adminId" },
        ]
      },
    ]
  });
  }
}

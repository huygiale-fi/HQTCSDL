import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Admin, AdminId } from './Admin';
import type { Contracts, ContractsId } from './Contracts';
import type { Partners, PartnersId } from './Partners';
import type { personalInfo, personalInfoId } from './personalInfo';

export interface StaffAttributes {
  staffId: number;
  adminId?: number;
  personalId?: number;
}

export type StaffPk = "staffId";
export type StaffId = Staff[StaffPk];
export type StaffOptionalAttributes = "staffId" | "adminId" | "personalId";
export type StaffCreationAttributes = Optional<StaffAttributes, StaffOptionalAttributes>;

export class Staff extends Model<StaffAttributes, StaffCreationAttributes> implements StaffAttributes {
  staffId!: number;
  adminId?: number;
  personalId?: number;

  // Staff belongsTo Admin via adminId
  admin!: Admin;
  getAdmin!: Sequelize.BelongsToGetAssociationMixin<Admin>;
  setAdmin!: Sequelize.BelongsToSetAssociationMixin<Admin, AdminId>;
  createAdmin!: Sequelize.BelongsToCreateAssociationMixin<Admin>;
  // Staff hasMany Contracts via sraffId
  Contracts!: Contracts[];
  getContracts!: Sequelize.HasManyGetAssociationsMixin<Contracts>;
  setContracts!: Sequelize.HasManySetAssociationsMixin<Contracts, ContractsId>;
  addContract!: Sequelize.HasManyAddAssociationMixin<Contracts, ContractsId>;
  addContracts!: Sequelize.HasManyAddAssociationsMixin<Contracts, ContractsId>;
  createContract!: Sequelize.HasManyCreateAssociationMixin<Contracts>;
  removeContract!: Sequelize.HasManyRemoveAssociationMixin<Contracts, ContractsId>;
  removeContracts!: Sequelize.HasManyRemoveAssociationsMixin<Contracts, ContractsId>;
  hasContract!: Sequelize.HasManyHasAssociationMixin<Contracts, ContractsId>;
  hasContracts!: Sequelize.HasManyHasAssociationsMixin<Contracts, ContractsId>;
  countContracts!: Sequelize.HasManyCountAssociationsMixin;
  // Staff hasMany Partners via staffId
  Partners!: Partners[];
  getPartners!: Sequelize.HasManyGetAssociationsMixin<Partners>;
  setPartners!: Sequelize.HasManySetAssociationsMixin<Partners, PartnersId>;
  addPartner!: Sequelize.HasManyAddAssociationMixin<Partners, PartnersId>;
  addPartners!: Sequelize.HasManyAddAssociationsMixin<Partners, PartnersId>;
  createPartner!: Sequelize.HasManyCreateAssociationMixin<Partners>;
  removePartner!: Sequelize.HasManyRemoveAssociationMixin<Partners, PartnersId>;
  removePartners!: Sequelize.HasManyRemoveAssociationsMixin<Partners, PartnersId>;
  hasPartner!: Sequelize.HasManyHasAssociationMixin<Partners, PartnersId>;
  hasPartners!: Sequelize.HasManyHasAssociationsMixin<Partners, PartnersId>;
  countPartners!: Sequelize.HasManyCountAssociationsMixin;
  // Staff belongsTo personalInfo via personalId
  personal!: personalInfo;
  getPersonal!: Sequelize.BelongsToGetAssociationMixin<personalInfo>;
  setPersonal!: Sequelize.BelongsToSetAssociationMixin<personalInfo, personalInfoId>;
  createPersonal!: Sequelize.BelongsToCreateAssociationMixin<personalInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Staff {
    return Staff.init({
    staffId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Admin',
        key: 'adminId'
      }
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
    tableName: 'Staff',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Staff",
        unique: true,
        fields: [
          { name: "staffId" },
        ]
      },
    ]
  });
  }
}

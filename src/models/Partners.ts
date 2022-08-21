import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Contracts, ContractsId } from './Contracts';
import type { Products, ProductsId } from './Products';
import type { Staff, StaffId } from './Staff';
import type { personalInfo, personalInfoId } from './personalInfo';

export interface PartnersAttributes {
  partnerId: number;
  ordersPerDay: string;
  productTransportType: string;
  city: string;
  district: string;
  representPerson: string;
  branchesCount: string;
  staffId?: number;
  personalId?: number;
}

export type PartnersPk = "partnerId";
export type PartnersId = Partners[PartnersPk];
export type PartnersOptionalAttributes = "partnerId" | "staffId" | "personalId";
export type PartnersCreationAttributes = Optional<PartnersAttributes, PartnersOptionalAttributes>;

export class Partners extends Model<PartnersAttributes, PartnersCreationAttributes> implements PartnersAttributes {
  partnerId!: number;
  ordersPerDay!: string;
  productTransportType!: string;
  city!: string;
  district!: string;
  representPerson!: string;
  branchesCount!: string;
  staffId?: number;
  personalId?: number;

  // Partners hasMany Contracts via partnerId
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
  // Partners hasMany Products via partnerId
  Products!: Products[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<Products>;
  setProducts!: Sequelize.HasManySetAssociationsMixin<Products, ProductsId>;
  addProduct!: Sequelize.HasManyAddAssociationMixin<Products, ProductsId>;
  addProducts!: Sequelize.HasManyAddAssociationsMixin<Products, ProductsId>;
  createProduct!: Sequelize.HasManyCreateAssociationMixin<Products>;
  removeProduct!: Sequelize.HasManyRemoveAssociationMixin<Products, ProductsId>;
  removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<Products, ProductsId>;
  hasProduct!: Sequelize.HasManyHasAssociationMixin<Products, ProductsId>;
  hasProducts!: Sequelize.HasManyHasAssociationsMixin<Products, ProductsId>;
  countProducts!: Sequelize.HasManyCountAssociationsMixin;
  // Partners belongsTo Staff via staffId
  staff!: Staff;
  getStaff!: Sequelize.BelongsToGetAssociationMixin<Staff>;
  setStaff!: Sequelize.BelongsToSetAssociationMixin<Staff, StaffId>;
  createStaff!: Sequelize.BelongsToCreateAssociationMixin<Staff>;
  // Partners belongsTo personalInfo via personalId
  personal!: personalInfo;
  getPersonal!: Sequelize.BelongsToGetAssociationMixin<personalInfo>;
  setPersonal!: Sequelize.BelongsToSetAssociationMixin<personalInfo, personalInfoId>;
  createPersonal!: Sequelize.BelongsToCreateAssociationMixin<personalInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Partners {
    return Partners.init({
    partnerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ordersPerDay: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    productTransportType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    representPerson: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    branchesCount: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Staff',
        key: 'staffId'
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
    tableName: 'Partners',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Partners",
        unique: true,
        fields: [
          { name: "partnerId" },
        ]
      },
    ]
  });
  }
}

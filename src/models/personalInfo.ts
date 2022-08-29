import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Admin, AdminId } from './Admin';
import type { Customers, CustomersId } from './Customers';
import type { Partners, PartnersId } from './Partners';
import type {
  Shippers,
  ShippersCreationAttributes,
  ShippersId,
} from './Shippers';
import type { Staff, StaffId } from './Staff';

export interface personalInfoAttributes {
  uid: number;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  adminId?: number;
  password?: string;
}

export type personalInfoPk = 'uid';
export type personalInfoId = personalInfo[personalInfoPk];
export type personalInfoOptionalAttributes =
  | 'uid'
  | 'phone'
  | 'email'
  | 'address'
  | 'adminId'
  | 'password';
export type personalInfoCreationAttributes = Optional<
  personalInfoAttributes,
  personalInfoOptionalAttributes
>;

export class personalInfo
  extends Model<personalInfoAttributes, personalInfoCreationAttributes>
  implements personalInfoAttributes
{
  uid!: number;
  name!: string;
  phone?: string;
  email?: string;
  address?: string;
  adminId?: number;
  password?: string;

  // personalInfo belongsTo Admin via adminId
  admin!: Admin;
  getAdmin!: Sequelize.BelongsToGetAssociationMixin<Admin>;
  setAdmin!: Sequelize.BelongsToSetAssociationMixin<Admin, AdminId>;
  createAdmin!: Sequelize.BelongsToCreateAssociationMixin<Admin>;
  // personalInfo hasMany Admin via personalId
  Admins!: Admin[];
  getAdmins!: Sequelize.HasManyGetAssociationsMixin<Admin>;
  setAdmins!: Sequelize.HasManySetAssociationsMixin<Admin, AdminId>;
  addAdmin!: Sequelize.HasManyAddAssociationMixin<Admin, AdminId>;
  addAdmins!: Sequelize.HasManyAddAssociationsMixin<Admin, AdminId>;
  removeAdmin!: Sequelize.HasManyRemoveAssociationMixin<Admin, AdminId>;
  removeAdmins!: Sequelize.HasManyRemoveAssociationsMixin<Admin, AdminId>;
  hasAdmin!: Sequelize.HasManyHasAssociationMixin<Admin, AdminId>;
  hasAdmins!: Sequelize.HasManyHasAssociationsMixin<Admin, AdminId>;
  countAdmins!: Sequelize.HasManyCountAssociationsMixin;
  // personalInfo hasMany Customers via personalId
  Customers!: Customers[];
  getCustomers!: Sequelize.HasManyGetAssociationsMixin<Customers>;
  setCustomers!: Sequelize.HasManySetAssociationsMixin<Customers, CustomersId>;
  addCustomer!: Sequelize.HasManyAddAssociationMixin<Customers, CustomersId>;
  addCustomers!: Sequelize.HasManyAddAssociationsMixin<Customers, CustomersId>;
  createCustomer!: Sequelize.HasManyCreateAssociationMixin<Customers>;
  removeCustomer!: Sequelize.HasManyRemoveAssociationMixin<
    Customers,
    CustomersId
  >;
  removeCustomers!: Sequelize.HasManyRemoveAssociationsMixin<
    Customers,
    CustomersId
  >;
  hasCustomer!: Sequelize.HasManyHasAssociationMixin<Customers, CustomersId>;
  hasCustomers!: Sequelize.HasManyHasAssociationsMixin<Customers, CustomersId>;
  countCustomers!: Sequelize.HasManyCountAssociationsMixin;
  // personalInfo hasMany Partners via personalId
  Partners!: Partners[];
  getPartners!: Sequelize.HasManyGetAssociationsMixin<Partners>;
  setPartners!: Sequelize.HasManySetAssociationsMixin<Partners, PartnersId>;
  addPartner!: Sequelize.HasManyAddAssociationMixin<Partners, PartnersId>;
  addPartners!: Sequelize.HasManyAddAssociationsMixin<Partners, PartnersId>;
  createPartner!: Sequelize.HasManyCreateAssociationMixin<Partners>;
  removePartner!: Sequelize.HasManyRemoveAssociationMixin<Partners, PartnersId>;
  removePartners!: Sequelize.HasManyRemoveAssociationsMixin<
    Partners,
    PartnersId
  >;
  hasPartner!: Sequelize.HasManyHasAssociationMixin<Partners, PartnersId>;
  hasPartners!: Sequelize.HasManyHasAssociationsMixin<Partners, PartnersId>;
  countPartners!: Sequelize.HasManyCountAssociationsMixin;
  // personalInfo hasOne Shippers via shipperId
  Shipper!: Shippers;
  getShipper!: Sequelize.HasOneGetAssociationMixin<Shippers>;
  setShipper!: Sequelize.HasOneSetAssociationMixin<Shippers, ShippersId>;
  createShipper!: Sequelize.HasOneCreateAssociationMixin<Shippers>;
  // personalInfo hasMany Staff via personalId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof personalInfo {
    return personalInfo.init(
      {
        uid: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        phone: {
          type: DataTypes.CHAR(10),
          allowNull: true,
        },
        email: {
          type: DataTypes.CHAR(50),
          allowNull: true,
        },
        address: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        adminId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'Admin',
            key: 'adminId',
          },
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'personalInfo',
        schema: 'dbo',
        timestamps: false,
        indexes: [
          {
            name: 'PK_personalInfo',
            unique: true,
            fields: [{ name: 'uid' }],
          },
        ],
      }
    );
  }
}

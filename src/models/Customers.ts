import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Orders, OrdersId } from './Orders';
import type { personalInfo, personalInfoId } from './personalInfo';

export interface CustomersAttributes {
  customerId: number;
  personalId?: number;
}

export type CustomersPk = "customerId";
export type CustomersId = Customers[CustomersPk];
export type CustomersOptionalAttributes = "customerId" | "personalId";
export type CustomersCreationAttributes = Optional<CustomersAttributes, CustomersOptionalAttributes>;

export class Customers extends Model<CustomersAttributes, CustomersCreationAttributes> implements CustomersAttributes {
  customerId!: number;
  personalId?: number;

  // Customers hasMany Orders via customerId
  Orders!: Orders[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<Orders>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<Orders, OrdersId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<Orders, OrdersId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<Orders, OrdersId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<Orders>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<Orders, OrdersId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<Orders, OrdersId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<Orders, OrdersId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<Orders, OrdersId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;
  // Customers belongsTo personalInfo via personalId
  personal!: personalInfo;
  getPersonal!: Sequelize.BelongsToGetAssociationMixin<personalInfo>;
  setPersonal!: Sequelize.BelongsToSetAssociationMixin<personalInfo, personalInfoId>;
  createPersonal!: Sequelize.BelongsToCreateAssociationMixin<personalInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Customers {
    return Customers.init({
    customerId: {
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
    tableName: 'Customers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Customers",
        unique: true,
        fields: [
          { name: "customerId" },
        ]
      },
    ]
  });
  }
}

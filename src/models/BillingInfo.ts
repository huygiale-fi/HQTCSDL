import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Orders, OrdersId } from './Orders';

export interface BillingInfoAttributes {
  billingId: number;
  paymentMethod?: string;
  billDate?: string;
  billAddress?: string;
  customerId: number;
  orderId: number;
}

export type BillingInfoPk = "billingId" | "customerId" | "orderId";
export type BillingInfoId = BillingInfo[BillingInfoPk];
export type BillingInfoOptionalAttributes = "billingId" | "paymentMethod" | "billDate" | "billAddress";
export type BillingInfoCreationAttributes = Optional<BillingInfoAttributes, BillingInfoOptionalAttributes>;

export class BillingInfo extends Model<BillingInfoAttributes, BillingInfoCreationAttributes> implements BillingInfoAttributes {
  billingId!: number;
  paymentMethod?: string;
  billDate?: string;
  billAddress?: string;
  customerId!: number;
  orderId!: number;

  // BillingInfo belongsTo Orders via customerId
  customer!: Orders;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<Orders>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<Orders, OrdersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<Orders>;
  // BillingInfo belongsTo Orders via orderId
  order!: Orders;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<Orders>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<Orders, OrdersId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<Orders>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BillingInfo {
    return BillingInfo.init({
    billingId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paymentMethod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    billDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    billAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Orders',
        key: 'orderId'
      }
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Orders',
        key: 'orderId'
      }
    }
  }, {
    sequelize,
    tableName: 'BillingInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BillingInfo",
        unique: true,
        fields: [
          { name: "billingId" },
          { name: "customerId" },
          { name: "orderId" },
        ]
      },
    ]
  });
  }
}

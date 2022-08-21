import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { BillingInfo, BillingInfoId } from './BillingInfo';
import type { Customers, CustomersId } from './Customers';
import type { OrderDetails, OrderDetailsId } from './OrderDetails';
import type { Shippers, ShippersId } from './Shippers';

export interface OrdersAttributes {
  orderId: number;
  orderDate?: Date;
  orderStatus?: string;
  totalPrice?: number;
  shipperId?: number;
  customerId: number;
}

export type OrdersPk = "orderId" | "customerId";
export type OrdersId = Orders[OrdersPk];
export type OrdersOptionalAttributes = "orderDate" | "orderStatus" | "totalPrice" | "shipperId";
export type OrdersCreationAttributes = Optional<OrdersAttributes, OrdersOptionalAttributes>;

export class Orders extends Model<OrdersAttributes, OrdersCreationAttributes> implements OrdersAttributes {
  orderId!: number;
  orderDate?: Date;
  orderStatus?: string;
  totalPrice?: number;
  shipperId?: number;
  customerId!: number;

  // Orders belongsTo Customers via customerId
  customer!: Customers;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<Customers>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<Customers, CustomersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<Customers>;
  // Orders hasMany BillingInfo via customerId
  BillingInfos!: BillingInfo[];
  getBillingInfos!: Sequelize.HasManyGetAssociationsMixin<BillingInfo>;
  setBillingInfos!: Sequelize.HasManySetAssociationsMixin<BillingInfo, BillingInfoId>;
  addBillingInfo!: Sequelize.HasManyAddAssociationMixin<BillingInfo, BillingInfoId>;
  addBillingInfos!: Sequelize.HasManyAddAssociationsMixin<BillingInfo, BillingInfoId>;
  createBillingInfo!: Sequelize.HasManyCreateAssociationMixin<BillingInfo>;
  removeBillingInfo!: Sequelize.HasManyRemoveAssociationMixin<BillingInfo, BillingInfoId>;
  removeBillingInfos!: Sequelize.HasManyRemoveAssociationsMixin<BillingInfo, BillingInfoId>;
  hasBillingInfo!: Sequelize.HasManyHasAssociationMixin<BillingInfo, BillingInfoId>;
  hasBillingInfos!: Sequelize.HasManyHasAssociationsMixin<BillingInfo, BillingInfoId>;
  countBillingInfos!: Sequelize.HasManyCountAssociationsMixin;
  // Orders hasMany BillingInfo via orderId
  order_BillingInfos!: BillingInfo[];
  getOrder_BillingInfos!: Sequelize.HasManyGetAssociationsMixin<BillingInfo>;
  setOrder_BillingInfos!: Sequelize.HasManySetAssociationsMixin<BillingInfo, BillingInfoId>;
  addOrder_BillingInfo!: Sequelize.HasManyAddAssociationMixin<BillingInfo, BillingInfoId>;
  addOrder_BillingInfos!: Sequelize.HasManyAddAssociationsMixin<BillingInfo, BillingInfoId>;
  createOrder_BillingInfo!: Sequelize.HasManyCreateAssociationMixin<BillingInfo>;
  removeOrder_BillingInfo!: Sequelize.HasManyRemoveAssociationMixin<BillingInfo, BillingInfoId>;
  removeOrder_BillingInfos!: Sequelize.HasManyRemoveAssociationsMixin<BillingInfo, BillingInfoId>;
  hasOrder_BillingInfo!: Sequelize.HasManyHasAssociationMixin<BillingInfo, BillingInfoId>;
  hasOrder_BillingInfos!: Sequelize.HasManyHasAssociationsMixin<BillingInfo, BillingInfoId>;
  countOrder_BillingInfos!: Sequelize.HasManyCountAssociationsMixin;
  // Orders hasMany OrderDetails via customerId
  OrderDetails!: OrderDetails[];
  getOrderDetails!: Sequelize.HasManyGetAssociationsMixin<OrderDetails>;
  setOrderDetails!: Sequelize.HasManySetAssociationsMixin<OrderDetails, OrderDetailsId>;
  addOrderDetail!: Sequelize.HasManyAddAssociationMixin<OrderDetails, OrderDetailsId>;
  addOrderDetails!: Sequelize.HasManyAddAssociationsMixin<OrderDetails, OrderDetailsId>;
  createOrderDetail!: Sequelize.HasManyCreateAssociationMixin<OrderDetails>;
  removeOrderDetail!: Sequelize.HasManyRemoveAssociationMixin<OrderDetails, OrderDetailsId>;
  removeOrderDetails!: Sequelize.HasManyRemoveAssociationsMixin<OrderDetails, OrderDetailsId>;
  hasOrderDetail!: Sequelize.HasManyHasAssociationMixin<OrderDetails, OrderDetailsId>;
  hasOrderDetails!: Sequelize.HasManyHasAssociationsMixin<OrderDetails, OrderDetailsId>;
  countOrderDetails!: Sequelize.HasManyCountAssociationsMixin;
  // Orders hasMany OrderDetails via orderId
  order_OrderDetails!: OrderDetails[];
  getOrder_OrderDetails!: Sequelize.HasManyGetAssociationsMixin<OrderDetails>;
  setOrder_OrderDetails!: Sequelize.HasManySetAssociationsMixin<OrderDetails, OrderDetailsId>;
  addOrder_OrderDetail!: Sequelize.HasManyAddAssociationMixin<OrderDetails, OrderDetailsId>;
  addOrder_OrderDetails!: Sequelize.HasManyAddAssociationsMixin<OrderDetails, OrderDetailsId>;
  createOrder_OrderDetail!: Sequelize.HasManyCreateAssociationMixin<OrderDetails>;
  removeOrder_OrderDetail!: Sequelize.HasManyRemoveAssociationMixin<OrderDetails, OrderDetailsId>;
  removeOrder_OrderDetails!: Sequelize.HasManyRemoveAssociationsMixin<OrderDetails, OrderDetailsId>;
  hasOrder_OrderDetail!: Sequelize.HasManyHasAssociationMixin<OrderDetails, OrderDetailsId>;
  hasOrder_OrderDetails!: Sequelize.HasManyHasAssociationsMixin<OrderDetails, OrderDetailsId>;
  countOrder_OrderDetails!: Sequelize.HasManyCountAssociationsMixin;
  // Orders belongsToMany Orders via customerId and orderId
  orderId_Orders!: Orders[];
  getOrderId_Orders!: Sequelize.BelongsToManyGetAssociationsMixin<Orders>;
  setOrderId_Orders!: Sequelize.BelongsToManySetAssociationsMixin<Orders, OrdersId>;
  addOrderId_Order!: Sequelize.BelongsToManyAddAssociationMixin<Orders, OrdersId>;
  addOrderId_Orders!: Sequelize.BelongsToManyAddAssociationsMixin<Orders, OrdersId>;
  createOrderId_Order!: Sequelize.BelongsToManyCreateAssociationMixin<Orders>;
  removeOrderId_Order!: Sequelize.BelongsToManyRemoveAssociationMixin<Orders, OrdersId>;
  removeOrderId_Orders!: Sequelize.BelongsToManyRemoveAssociationsMixin<Orders, OrdersId>;
  hasOrderId_Order!: Sequelize.BelongsToManyHasAssociationMixin<Orders, OrdersId>;
  hasOrderId_Orders!: Sequelize.BelongsToManyHasAssociationsMixin<Orders, OrdersId>;
  countOrderId_Orders!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Orders belongsToMany Orders via orderId and customerId
  customerId_Orders!: Orders[];
  getCustomerId_Orders!: Sequelize.BelongsToManyGetAssociationsMixin<Orders>;
  setCustomerId_Orders!: Sequelize.BelongsToManySetAssociationsMixin<Orders, OrdersId>;
  addCustomerId_Order!: Sequelize.BelongsToManyAddAssociationMixin<Orders, OrdersId>;
  addCustomerId_Orders!: Sequelize.BelongsToManyAddAssociationsMixin<Orders, OrdersId>;
  createCustomerId_Order!: Sequelize.BelongsToManyCreateAssociationMixin<Orders>;
  removeCustomerId_Order!: Sequelize.BelongsToManyRemoveAssociationMixin<Orders, OrdersId>;
  removeCustomerId_Orders!: Sequelize.BelongsToManyRemoveAssociationsMixin<Orders, OrdersId>;
  hasCustomerId_Order!: Sequelize.BelongsToManyHasAssociationMixin<Orders, OrdersId>;
  hasCustomerId_Orders!: Sequelize.BelongsToManyHasAssociationsMixin<Orders, OrdersId>;
  countCustomerId_Orders!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Orders belongsTo Shippers via shipperId
  shipper!: Shippers;
  getShipper!: Sequelize.BelongsToGetAssociationMixin<Shippers>;
  setShipper!: Sequelize.BelongsToSetAssociationMixin<Shippers, ShippersId>;
  createShipper!: Sequelize.BelongsToCreateAssociationMixin<Shippers>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Orders {
    return Orders.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    orderStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    shipperId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Shippers',
        key: 'shipperId'
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Customers',
        key: 'customerId'
      }
    }
  }, {
    sequelize,
    tableName: 'Orders',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Orders",
        unique: true,
        fields: [
          { name: "orderId" },
          { name: "customerId" },
        ]
      },
    ]
  });
  }
}

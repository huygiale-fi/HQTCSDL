import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Orders, OrdersId } from './Orders';
import type { Products, ProductsId } from './Products';

export interface OrderDetailsAttributes {
  productId: number;
  orderId: number;
  quantity: number;
  saleUnitPrice?: number;
  customerId: number;
  partnerId: number;
}

export type OrderDetailsPk = "productId" | "orderId" | "customerId" | "partnerId";
export type OrderDetailsId = OrderDetails[OrderDetailsPk];
export type OrderDetailsOptionalAttributes = "saleUnitPrice";
export type OrderDetailsCreationAttributes = Optional<OrderDetailsAttributes, OrderDetailsOptionalAttributes>;

export class OrderDetails extends Model<OrderDetailsAttributes, OrderDetailsCreationAttributes> implements OrderDetailsAttributes {
  productId!: number;
  orderId!: number;
  quantity!: number;
  saleUnitPrice?: number;
  customerId!: number;
  partnerId!: number;

  // OrderDetails belongsTo Orders via customerId
  customer!: Orders;
  getCustomer!: Sequelize.BelongsToGetAssociationMixin<Orders>;
  setCustomer!: Sequelize.BelongsToSetAssociationMixin<Orders, OrdersId>;
  createCustomer!: Sequelize.BelongsToCreateAssociationMixin<Orders>;
  // OrderDetails belongsTo Orders via orderId
  order!: Orders;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<Orders>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<Orders, OrdersId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<Orders>;
  // OrderDetails belongsTo Products via partnerId
  partner!: Products;
  getPartner!: Sequelize.BelongsToGetAssociationMixin<Products>;
  setPartner!: Sequelize.BelongsToSetAssociationMixin<Products, ProductsId>;
  createPartner!: Sequelize.BelongsToCreateAssociationMixin<Products>;
  // OrderDetails belongsTo Products via productId
  product!: Products;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<Products>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<Products, ProductsId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<Products>;

  static initModel(sequelize: Sequelize.Sequelize): typeof OrderDetails {
    return OrderDetails.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Products',
        key: 'productId'
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
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saleUnitPrice: {
      type: DataTypes.FLOAT,
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
    partnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Products',
        key: 'productId'
      }
    }
  }, {
    sequelize,
    tableName: 'OrderDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_OrderDetails_1",
        unique: true,
        fields: [
          { name: "productId" },
          { name: "orderId" },
          { name: "customerId" },
          { name: "partnerId" },
        ]
      },
    ]
  });
  }
}

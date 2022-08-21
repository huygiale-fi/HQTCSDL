import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { OrderDetails, OrderDetailsId } from './OrderDetails';
import type { Partners, PartnersId } from './Partners';

export interface ProductsAttributes {
  productId: number;
  name: string;
  unitPrice: number;
  description?: string;
  quantity: number;
  partnerId: number;
}

export type ProductsPk = "productId" | "partnerId";
export type ProductsId = Products[ProductsPk];
export type ProductsOptionalAttributes = "productId" | "description";
export type ProductsCreationAttributes = Optional<ProductsAttributes, ProductsOptionalAttributes>;

export class Products extends Model<ProductsAttributes, ProductsCreationAttributes> implements ProductsAttributes {
  productId!: number;
  name!: string;
  unitPrice!: number;
  description?: string;
  quantity!: number;
  partnerId!: number;

  // Products belongsTo Partners via partnerId
  partner!: Partners;
  getPartner!: Sequelize.BelongsToGetAssociationMixin<Partners>;
  setPartner!: Sequelize.BelongsToSetAssociationMixin<Partners, PartnersId>;
  createPartner!: Sequelize.BelongsToCreateAssociationMixin<Partners>;
  // Products hasMany OrderDetails via partnerId
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
  // Products hasMany OrderDetails via productId
  product_OrderDetails!: OrderDetails[];
  getProduct_OrderDetails!: Sequelize.HasManyGetAssociationsMixin<OrderDetails>;
  setProduct_OrderDetails!: Sequelize.HasManySetAssociationsMixin<OrderDetails, OrderDetailsId>;
  addProduct_OrderDetail!: Sequelize.HasManyAddAssociationMixin<OrderDetails, OrderDetailsId>;
  addProduct_OrderDetails!: Sequelize.HasManyAddAssociationsMixin<OrderDetails, OrderDetailsId>;
  createProduct_OrderDetail!: Sequelize.HasManyCreateAssociationMixin<OrderDetails>;
  removeProduct_OrderDetail!: Sequelize.HasManyRemoveAssociationMixin<OrderDetails, OrderDetailsId>;
  removeProduct_OrderDetails!: Sequelize.HasManyRemoveAssociationsMixin<OrderDetails, OrderDetailsId>;
  hasProduct_OrderDetail!: Sequelize.HasManyHasAssociationMixin<OrderDetails, OrderDetailsId>;
  hasProduct_OrderDetails!: Sequelize.HasManyHasAssociationsMixin<OrderDetails, OrderDetailsId>;
  countProduct_OrderDetails!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Products {
    return Products.init({
    productId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Partners',
        key: 'partnerId'
      }
    }
  }, {
    sequelize,
    tableName: 'Products',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Products",
        unique: true,
        fields: [
          { name: "productId" },
          { name: "partnerId" },
        ]
      },
    ]
  });
  }
}

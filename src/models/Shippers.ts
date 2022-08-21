import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Orders, OrdersId } from './Orders';
import type { personalInfo, personalInfoId } from './personalInfo';

export interface ShippersAttributes {
  shipperId: number;
  bankInfo?: string;
  idCardNumber?: number;
  licensePlate?: string;
  activeArea?: string;
  personalId?: number;
}

export type ShippersPk = "shipperId";
export type ShippersId = Shippers[ShippersPk];
export type ShippersOptionalAttributes = "shipperId" | "bankInfo" | "idCardNumber" | "licensePlate" | "activeArea" | "personalId";
export type ShippersCreationAttributes = Optional<ShippersAttributes, ShippersOptionalAttributes>;

export class Shippers extends Model<ShippersAttributes, ShippersCreationAttributes> implements ShippersAttributes {
  shipperId!: number;
  bankInfo?: string;
  idCardNumber?: number;
  licensePlate?: string;
  activeArea?: string;
  personalId?: number;

  // Shippers hasMany Orders via shipperId
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
  // Shippers belongsTo personalInfo via shipperId
  shipper!: personalInfo;
  getShipper!: Sequelize.BelongsToGetAssociationMixin<personalInfo>;
  setShipper!: Sequelize.BelongsToSetAssociationMixin<personalInfo, personalInfoId>;
  createShipper!: Sequelize.BelongsToCreateAssociationMixin<personalInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Shippers {
    return Shippers.init({
    shipperId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'personalInfo',
        key: 'uid'
      }
    },
    bankInfo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    idCardNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    licensePlate: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    activeArea: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    personalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Shippers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Shippers",
        unique: true,
        fields: [
          { name: "shipperId" },
        ]
      },
    ]
  });
  }
}

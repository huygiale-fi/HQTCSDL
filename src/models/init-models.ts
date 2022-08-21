import type { Sequelize } from "sequelize";
import { Admin as _Admin } from "./Admin";
import type { AdminAttributes, AdminCreationAttributes } from "./Admin";
import { BillingInfo as _BillingInfo } from "./BillingInfo";
import type { BillingInfoAttributes, BillingInfoCreationAttributes } from "./BillingInfo";
import { BranchAddresses as _BranchAddresses } from "./BranchAddresses";
import type { BranchAddressesAttributes, BranchAddressesCreationAttributes } from "./BranchAddresses";
import { Contracts as _Contracts } from "./Contracts";
import type { ContractsAttributes, ContractsCreationAttributes } from "./Contracts";
import { Customers as _Customers } from "./Customers";
import type { CustomersAttributes, CustomersCreationAttributes } from "./Customers";
import { OrderDetails as _OrderDetails } from "./OrderDetails";
import type { OrderDetailsAttributes, OrderDetailsCreationAttributes } from "./OrderDetails";
import { Orders as _Orders } from "./Orders";
import type { OrdersAttributes, OrdersCreationAttributes } from "./Orders";
import { Partners as _Partners } from "./Partners";
import type { PartnersAttributes, PartnersCreationAttributes } from "./Partners";
import { Products as _Products } from "./Products";
import type { ProductsAttributes, ProductsCreationAttributes } from "./Products";
import { Shippers as _Shippers } from "./Shippers";
import type { ShippersAttributes, ShippersCreationAttributes } from "./Shippers";
import { Staff as _Staff } from "./Staff";
import type { StaffAttributes, StaffCreationAttributes } from "./Staff";
import { personalInfo as _personalInfo } from "./personalInfo";
import type { personalInfoAttributes, personalInfoCreationAttributes } from "./personalInfo";

export {
  _Admin as Admin,
  _BillingInfo as BillingInfo,
  _BranchAddresses as BranchAddresses,
  _Contracts as Contracts,
  _Customers as Customers,
  _OrderDetails as OrderDetails,
  _Orders as Orders,
  _Partners as Partners,
  _Products as Products,
  _Shippers as Shippers,
  _Staff as Staff,
  _personalInfo as personalInfo,
};

export type {
  AdminAttributes,
  AdminCreationAttributes,
  BillingInfoAttributes,
  BillingInfoCreationAttributes,
  BranchAddressesAttributes,
  BranchAddressesCreationAttributes,
  ContractsAttributes,
  ContractsCreationAttributes,
  CustomersAttributes,
  CustomersCreationAttributes,
  OrderDetailsAttributes,
  OrderDetailsCreationAttributes,
  OrdersAttributes,
  OrdersCreationAttributes,
  PartnersAttributes,
  PartnersCreationAttributes,
  ProductsAttributes,
  ProductsCreationAttributes,
  ShippersAttributes,
  ShippersCreationAttributes,
  StaffAttributes,
  StaffCreationAttributes,
  personalInfoAttributes,
  personalInfoCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Admin = _Admin.initModel(sequelize);
  const BillingInfo = _BillingInfo.initModel(sequelize);
  const BranchAddresses = _BranchAddresses.initModel(sequelize);
  const Contracts = _Contracts.initModel(sequelize);
  const Customers = _Customers.initModel(sequelize);
  const OrderDetails = _OrderDetails.initModel(sequelize);
  const Orders = _Orders.initModel(sequelize);
  const Partners = _Partners.initModel(sequelize);
  const Products = _Products.initModel(sequelize);
  const Shippers = _Shippers.initModel(sequelize);
  const Staff = _Staff.initModel(sequelize);
  const personalInfo = _personalInfo.initModel(sequelize);

  Orders.belongsToMany(Orders, { as: 'orderId_Orders', through: BillingInfo, foreignKey: "customerId", otherKey: "orderId" });
  Orders.belongsToMany(Orders, { as: 'customerId_Orders', through: BillingInfo, foreignKey: "orderId", otherKey: "customerId" });
  Staff.belongsTo(Admin, { as: "admin", foreignKey: "adminId"});
  Admin.hasMany(Staff, { as: "Staffs", foreignKey: "adminId"});
  personalInfo.belongsTo(Admin, { as: "admin", foreignKey: "adminId"});
  Admin.hasMany(personalInfo, { as: "personalInfos", foreignKey: "adminId"});
  BranchAddresses.belongsTo(Contracts, { as: "contract", foreignKey: "contractId"});
  Contracts.hasMany(BranchAddresses, { as: "BranchAddresses", foreignKey: "contractId"});
  Orders.belongsTo(Customers, { as: "customer", foreignKey: "customerId"});
  Customers.hasMany(Orders, { as: "Orders", foreignKey: "customerId"});
  BillingInfo.belongsTo(Orders, { as: "customer", foreignKey: "customerId"});
  Orders.hasMany(BillingInfo, { as: "BillingInfos", foreignKey: "customerId"});
  BillingInfo.belongsTo(Orders, { as: "order", foreignKey: "orderId"});
  Orders.hasMany(BillingInfo, { as: "order_BillingInfos", foreignKey: "orderId"});
  OrderDetails.belongsTo(Orders, { as: "customer", foreignKey: "customerId"});
  Orders.hasMany(OrderDetails, { as: "OrderDetails", foreignKey: "customerId"});
  OrderDetails.belongsTo(Orders, { as: "order", foreignKey: "orderId"});
  Orders.hasMany(OrderDetails, { as: "order_OrderDetails", foreignKey: "orderId"});
  Contracts.belongsTo(Partners, { as: "partner", foreignKey: "partnerId"});
  Partners.hasMany(Contracts, { as: "Contracts", foreignKey: "partnerId"});
  Products.belongsTo(Partners, { as: "partner", foreignKey: "partnerId"});
  Partners.hasMany(Products, { as: "Products", foreignKey: "partnerId"});
  OrderDetails.belongsTo(Products, { as: "partner", foreignKey: "partnerId"});
  Products.hasMany(OrderDetails, { as: "OrderDetails", foreignKey: "partnerId"});
  OrderDetails.belongsTo(Products, { as: "product", foreignKey: "productId"});
  Products.hasMany(OrderDetails, { as: "product_OrderDetails", foreignKey: "productId"});
  Orders.belongsTo(Shippers, { as: "shipper", foreignKey: "shipperId"});
  Shippers.hasMany(Orders, { as: "Orders", foreignKey: "shipperId"});
  Contracts.belongsTo(Staff, { as: "sraff", foreignKey: "sraffId"});
  Staff.hasMany(Contracts, { as: "Contracts", foreignKey: "sraffId"});
  Partners.belongsTo(Staff, { as: "staff", foreignKey: "staffId"});
  Staff.hasMany(Partners, { as: "Partners", foreignKey: "staffId"});
  Admin.belongsTo(personalInfo, { as: "personal", foreignKey: "personalId"});
  personalInfo.hasMany(Admin, { as: "Admins", foreignKey: "personalId"});
  Customers.belongsTo(personalInfo, { as: "personal", foreignKey: "personalId"});
  personalInfo.hasMany(Customers, { as: "Customers", foreignKey: "personalId"});
  Partners.belongsTo(personalInfo, { as: "personal", foreignKey: "personalId"});
  personalInfo.hasMany(Partners, { as: "Partners", foreignKey: "personalId"});
  Shippers.belongsTo(personalInfo, { as: "shipper", foreignKey: "shipperId"});
  personalInfo.hasOne(Shippers, { as: "Shipper", foreignKey: "shipperId"});
  Staff.belongsTo(personalInfo, { as: "personal", foreignKey: "personalId"});
  personalInfo.hasMany(Staff, { as: "Staffs", foreignKey: "personalId"});

  return {
    Admin: Admin,
    BillingInfo: BillingInfo,
    BranchAddresses: BranchAddresses,
    Contracts: Contracts,
    Customers: Customers,
    OrderDetails: OrderDetails,
    Orders: Orders,
    Partners: Partners,
    Products: Products,
    Shippers: Shippers,
    Staff: Staff,
    personalInfo: personalInfo,
  };
}

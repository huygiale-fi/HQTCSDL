import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { BranchAddresses, BranchAddressesId } from './BranchAddresses';
import type { Partners, PartnersId } from './Partners';
import type { Staff, StaffId } from './Staff';

export interface ContractsAttributes {
  contractId: number;
  partnerId: number;
  taxId: string;
  representPerson?: string;
  registerBranches?: string;
  sraffId?: number;
}

export type ContractsPk = "contractId";
export type ContractsId = Contracts[ContractsPk];
export type ContractsOptionalAttributes = "contractId" | "representPerson" | "registerBranches" | "sraffId";
export type ContractsCreationAttributes = Optional<ContractsAttributes, ContractsOptionalAttributes>;

export class Contracts extends Model<ContractsAttributes, ContractsCreationAttributes> implements ContractsAttributes {
  contractId!: number;
  partnerId!: number;
  taxId!: string;
  representPerson?: string;
  registerBranches?: string;
  sraffId?: number;

  // Contracts hasMany BranchAddresses via contractId
  BranchAddresses!: BranchAddresses[];
  getBranchAddresses!: Sequelize.HasManyGetAssociationsMixin<BranchAddresses>;
  setBranchAddresses!: Sequelize.HasManySetAssociationsMixin<BranchAddresses, BranchAddressesId>;
  addBranchAddress!: Sequelize.HasManyAddAssociationMixin<BranchAddresses, BranchAddressesId>;
  addBranchAddresses!: Sequelize.HasManyAddAssociationsMixin<BranchAddresses, BranchAddressesId>;
  createBranchAddress!: Sequelize.HasManyCreateAssociationMixin<BranchAddresses>;
  removeBranchAddress!: Sequelize.HasManyRemoveAssociationMixin<BranchAddresses, BranchAddressesId>;
  removeBranchAddresses!: Sequelize.HasManyRemoveAssociationsMixin<BranchAddresses, BranchAddressesId>;
  hasBranchAddress!: Sequelize.HasManyHasAssociationMixin<BranchAddresses, BranchAddressesId>;
  hasBranchAddresses!: Sequelize.HasManyHasAssociationsMixin<BranchAddresses, BranchAddressesId>;
  countBranchAddresses!: Sequelize.HasManyCountAssociationsMixin;
  // Contracts belongsTo Partners via partnerId
  partner!: Partners;
  getPartner!: Sequelize.BelongsToGetAssociationMixin<Partners>;
  setPartner!: Sequelize.BelongsToSetAssociationMixin<Partners, PartnersId>;
  createPartner!: Sequelize.BelongsToCreateAssociationMixin<Partners>;
  // Contracts belongsTo Staff via sraffId
  sraff!: Staff;
  getSraff!: Sequelize.BelongsToGetAssociationMixin<Staff>;
  setSraff!: Sequelize.BelongsToSetAssociationMixin<Staff, StaffId>;
  createSraff!: Sequelize.BelongsToCreateAssociationMixin<Staff>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Contracts {
    return Contracts.init({
    contractId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Partners',
        key: 'partnerId'
      }
    },
    taxId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    representPerson: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    registerBranches: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sraffId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Staff',
        key: 'staffId'
      }
    }
  }, {
    sequelize,
    tableName: 'Contracts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Contracts",
        unique: true,
        fields: [
          { name: "contractId" },
        ]
      },
    ]
  });
  }
}

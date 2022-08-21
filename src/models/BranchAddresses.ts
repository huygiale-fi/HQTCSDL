import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Contracts, ContractsId } from './Contracts';

export interface BranchAddressesAttributes {
  branchAddressesId: number;
  contractId: number;
}

export type BranchAddressesPk = "branchAddressesId" | "contractId";
export type BranchAddressesId = BranchAddresses[BranchAddressesPk];
export type BranchAddressesCreationAttributes = BranchAddressesAttributes;

export class BranchAddresses extends Model<BranchAddressesAttributes, BranchAddressesCreationAttributes> implements BranchAddressesAttributes {
  branchAddressesId!: number;
  contractId!: number;

  // BranchAddresses belongsTo Contracts via contractId
  contract!: Contracts;
  getContract!: Sequelize.BelongsToGetAssociationMixin<Contracts>;
  setContract!: Sequelize.BelongsToSetAssociationMixin<Contracts, ContractsId>;
  createContract!: Sequelize.BelongsToCreateAssociationMixin<Contracts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BranchAddresses {
    return BranchAddresses.init({
    branchAddressesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Contracts',
        key: 'contractId'
      }
    }
  }, {
    sequelize,
    tableName: 'BranchAddresses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BranchAddresses",
        unique: true,
        fields: [
          { name: "branchAddressesId" },
          { name: "contractId" },
        ]
      },
    ]
  });
  }
}

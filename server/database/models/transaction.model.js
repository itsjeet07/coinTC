"use strict";
const { Model } = require("sequelize");
const hooks = require("../hooks/transaction.hook");
const { TABLE_NAMES, TRANSACTION_TYPES } = require("../../constants");
const faker = require("faker");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Transaction, User } = models;
      User.hasMany(Transaction, {
        foreignKey: { name: "user_id" },
      });
    }

    static FAKE(count) {
      let rows = [],
        result = {},
        index = 0;
      let generateFakeData = () => {
        let { User, Advert } = sequelize?.models;
        return {
          id: faker.datatype.uuid(),
          type: faker.helpers.randomize(Object.values(TRANSACTION_TYPES)),
          trx_id: faker.datatype.uuid(),
          createdAt: faker.datatype.datetime(),
          updatedAt: faker.datatype.datetime(),
          user_id: User.FAKE(),
        };
      };
      if (count > 1) {
        for (; index < count; ++index) {
          rows.push(generateFakeData());
        }
        result = { count, rows };
      } else result = { ...generateFakeData() };
      return result;
    }
  }

  Transaction.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => {
          return `ORD-${Date.now().toString()}`;
        },
      },
      archived_at: DataTypes.DATE,
      trx_id: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM(Object.values(TRANSACTION_TYPES)),
        allowNull: false,
        set(val) {
          this.setDataValue("type", String(val)?.toUpperCase());
        },
      },
    },
    {
      sequelize,
      modelName: "Transaction",
      underscored: true,
      paranoid: true,
      tableName: TABLE_NAMES?.TRANSACTION || "tbl_trxs",
      hooks,
      deletedAt: "archived_at",
    }
  );
  return Transaction;
};

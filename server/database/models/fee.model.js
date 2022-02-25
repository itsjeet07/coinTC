"use strict";
const { Model } = require("sequelize");
const { TABLE_NAMES } = require("../../constants");
const faker = require("faker");
const { FIAT_CURRENCIES, SUPPORTED_TOKENS, FEE_TYPES } = require("../../constants");

module.exports = (sequelize, DataTypes) => {
  class Fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Fee }) {
      Fee.belongsTo(User, {
        foreignKey: {
          name: "user_id",
        },
      });
    }

    static FAKE(count) {
      let rows = [],
        result = {},
        index = 0;
      let generateFakeData = () => {
        return {
          fiat: faker.helpers.randomize(Object.keys(FIAT_CURRENCIES)),
          crypto: faker.helpers.randomize(Object.keys(SUPPORTED_TOKENS)),
          type: faker.helpers.randomize(Object.keys(FEE_TYPES)),
          rate: faker.datatype.float(),
          createdAt: faker.datatype.datetime(),
          updatedAt: faker.datatype.datetime(),
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

  Fee.init(
    {
      fiat: DataTypes.STRING,
      crypto: DataTypes.STRING,
      // rate: DataTypes.DOUBLE,
      type: {
        type: DataTypes.ENUM(Object.values(FEE_TYPES)),
        set(val) {
          this.setDataValue("type", String(val)?.toUpperCase());
        },
      },
      amount_in_percent: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Fee",
      underscored: true,
      tableName: TABLE_NAMES?.FEE || "tbl_fees",
    }
  );
  return Fee;
};

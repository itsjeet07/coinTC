"use strict";
const { TABLE_NAMES, SUPPORTED_TOKENS } = require("../../constants");
let table_name = TABLE_NAMES?.WALLET || "tbl_wallet_types";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Table fields
      let fields = {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        signature_id: Sequelize.UUID,
        tatum_account_id: Sequelize.STRING,
        memo: Sequelize.STRING,
        mnemonic: Sequelize.STRING,
        destination_tag: Sequelize.STRING,
        derivation_key: Sequelize.INTEGER,
        address: Sequelize.STRING,
        frozen: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        currency: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        is_company_wallet: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        user_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: { model: TABLE_NAMES?.USER || "tbl_users", key: "id" },
        },
      };

      // Add table modifications here
      async function modifications(d) {
        await queryInterface.sequelize.transaction(async (t) => {
          return await Promise.all([
            "asset" in d &&
              queryInterface.renameColumn(table_name, "asset", "currency", {
                transaction: t,
              }),
            !("derivation_key" in d) &&
              queryInterface.addColumn(
                table_name,
                "derivation_key",
                { type: DataTypes.INTEGER },
                {
                  transaction: t,
                }
              ),
            !("address" in d) &&
              queryInterface.addColumn(
                table_name,
                "address",
                { type: DataTypes.STRING },
                {
                  transaction: t,
                }
              ),
          ]);
        });
      }

      // Check if table exist and apply modifications else create and apply modifications
      await queryInterface
        .describeTable(table_name)
        .then(modifications)
        .catch(async () => {
          await queryInterface.createTable(table_name, fields);
          let dfns = await queryInterface.describeTable(table_name);
          modifications(dfns);
        });
    } catch (error) {
      console.error(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.dropTable(table_name, {
          transaction: t,
        }),
      ]);
    });
  },
};

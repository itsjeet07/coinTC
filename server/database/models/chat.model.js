"use strict";
const { Model } = require("sequelize");
const hooks = require("../hooks/chat.hook");
const { TABLE_NAMES, LOG_TYPES } = require("../../constants");
const faker = require("faker");

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Chat, Message } = models;
      Chat.hasMany(Message, {
        foreignKey: { name: "chat_id" },
        onDelete: "CASCADE",
      });
    }
    static makeHash(to, from) {
      // console.log({ to, from });
      return [to.replace(/-/g, ""), from.replace(/-/g, "")].sort().join("-");
    }

    static FAKE(count) {
      let rows = [],
        result = {},
        index = 0;
      let generateFakeData = () => {
        let id = faker.datatype.uuid();

        return {
          id,
          to: faker.datatype.uuid(),
          from: faker.datatype.uuid(),
          inbox_hash: faker.datatype.uuid(),
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

    /**
     * 
     * @param {import('../../schema/logger.metadata.schema').CHATSSchema} metadata 
     * @returns {Promise<import('../../schema/others').StatusResponse>}
     */
     async logChat(metadata){
      
      /**
       * @type Model
       */
      const Logger = sequelize.models.Logger
      const data = await Logger.create({
        type:LOG_TYPES.CHATS,
        metadata
      })
      
      return {status:"success",message:"chat log has been created",data}
    }
  }

  Chat.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      inbox_hash: {
        type: DataTypes.STRING,
        unique: true,
      },
      // VIRTUALS
      to: {
        type: DataTypes.VIRTUAL,
      },
      from: {
        type: DataTypes.VIRTUAL,
      },
    },
    {
      sequelize,
      modelName: "Chat",
      underscored: true,
      tableName: TABLE_NAMES?.CHAT || "tbl_chats",
      hooks,
    }
  );

  return Chat;
};

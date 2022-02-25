"use strict";
const { Model } = require("sequelize");
const { TABLE_NAMES } = require("../../constants");
const faker = require("faker");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Chat, Message } = models;
      // Message.belongsTo(User, {});
      Message.belongsTo(Chat, {
        foreignKey: {
          name: "chat_id",
          as: 'messages'
        },
      });
    }

    static FAKE(count) {
      let rows = [],
        result = {},
        index = 0;
      let generateFakeData = () => {
        let id = faker.datatype.uuid();

        return {
          id,
          chat_id: faker.datatype.uuid(),
          sender_id: faker.datatype.uuid(),
          text: faker.lorem.sentence(),
          read: faker.datatype.boolean(),
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
  Message.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      sender_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      read: { type: DataTypes.BOOLEAN, defaultValue: false },
      chat_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Message",
      underscored: true,
      tableName: TABLE_NAMES?.CHAT_MESSAGE || "tbl_chat_messages",
    }
  );
  return Message;
};

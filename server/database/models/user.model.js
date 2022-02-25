"use strict";
const { Model } = require("sequelize");
const _ = require("underscore");
const hooks = require("../hooks/user.hook");
const faker = require("faker");
const boom = require("@hapi/boom");
const dfn = require("date-fns");
const URL = require("url");
const twilio = require("twilio");
const Joi = require("joi");
const {
  config: { base_url },
  generator,
  mailer: { setupMailer },
  jwt,
} = require("../../helpers");
const {
  TABLE_NAMES,
  LOG_TYPES,
  SUPPORTED_TOKENS,
  KYC_TYPES,
  KYC_STATUSES,
  LOG_STATUSES,
  JWT_SCOPES,
  CLIENT_ROUTES,
} = require("../../constants");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        Profile,
        User,
        BankDetail,
        Wallet,
        Address,
        Kyc,
        Security,
        Secession,
        Upload,
        Currency,
        Advert,
        Order,
        Fee,
        Policy,
        Logger,
      } = models;

      User.hasOne(User, {
        foreignKey: {
          type: DataTypes.UUID,
          name: "created_by",
        },
      });

      User.hasMany(Wallet, {
        foreignKey: { name: "user_id", allowNull: false },
      });

      User.hasOne(Profile, {
        as: "profile",
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
        onDelete: "CASCADE",
      });

      User.hasMany(BankDetail, {
        as: "bankdetails",
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      User.hasMany(Logger, {
        foreignKey: { name: "user_id", allowNull: true },
      });

      User.hasMany(Address, {
        as: "addresses",
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      User.hasOne(Kyc, {
        as: "kyc",
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      User.hasOne(Security, {
        as: "security",
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      User.hasMany(Secession, {
        as: "secessions",
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      User.hasMany(Upload, {
        as: "uploads",
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      User.hasMany(Currency, {
        as: "currencies",
        foreignKey: { name: "user_id", allowNull: false },
      });

      User.hasMany(Advert, {
        as: "adverts",
        foreignKey: { name: "user_id", allowNull: false },
      });

      User.hasMany(Order, {
        as: "orders",
        foreignKey: {
          name: "user_id",
        },
      });
      User.hasMany(Fee, {
        as: "fees",
        foreignKey: {
          name: "user_id",
        },
      });
      User.hasMany(Policy, {
        as: "policies",
        foreignKey: {
          name: "user_id",
        },
      });
      // User.hasMany(Message, {})
    }

    static FAKE(count = 0) {
      let rows = [],
        result = {},
        index = 0;
      let generateFakeData = () => {
        let id = faker.datatype.uuid(),
          access_level = faker.helpers.randomize([1, 2, 3]);
        const { Profile } = sequelize?.models;
        return {
          id,
          user_id: id,
          email: faker.internet.email(),
          active: faker.datatype.boolean(),
          verified: faker.datatype.boolean(),
          permission: faker.datatype.boolean(),
          archived_at: faker.datatype.datetime(),
          last_seen: faker.date.recent(),
          login_at: faker.date.recent(),
          access_level,
          online: faker.helpers.randomize([true, false]),
          isBasic: access_level === 1,
          isAdmin: access_level === 2,
          isSuperAdmin: access_level === 3,
          createdAt: faker.datatype.datetime(),
          updatedAt: faker.date.recent(),
          profile: Profile.FAKE(),
          total_adverts: faker.datatype.number(100),
          total_orders: faker.datatype.number(100),
          total_completed_orders: faker.datatype.number(100),
          total_positive_reviews: faker.datatype.number(10),
          total_negative_reviews: faker.datatype.number(10),
        };
      };
      if (count > 0) {
        for (; index < count; ++index) {
          rows.push(generateFakeData());
        }
        result = { count, rows };
      } else result = { ...generateFakeData() };
      return result;
    }

    /*
     * @description sends an account confimation mail to user
     * @param {Object} opts
     * @param {Function} cb
     * @returns
     */
    static async sendConfirmationMail(opts, cb = null) {
      try {
        const { sendMail } = await setupMailer().catch(console.error);
        const confirmationLink = new URL.URL(base_url);

        confirmationLink.pathname = CLIENT_ROUTES?.authVerifyEmail;
        confirmationLink.search = `token=${encodeURIComponent(
          opts?.token
        )}&email=${opts?.to}`;

        let mailStatus = await sendMail(
          {
            template: "account_confirmation",
            transforms: {
              ...opts,
              confirmationLink: confirmationLink.href,
            },
            subject: "Cointc - New account confirmation",
            to: opts?.to,
          },
          cb
        );

        return mailStatus;
      } catch (err) {
        // console.error(err);
        return boom.isBoom(err) ? err : boom.boomify(err);
      }
    }

    /**
     *
     * @param {Object} payload  New user information
     * @param {User} created_by Who is attempting to create a new user (Admins only)
     * @returns
     */
    static register = async (
      {
        email,
        password = null,
        access_level = 1,
        repeat_password = null,
        ...others
      },
      created_by = null
    ) => {
      try {
        const { Profile, Affiliate } = sequelize?.models;

        let extraComment = "",
          password_is_unknown = false;

        // Verifications
        if (password && password !== repeat_password)
          throw boom.badData(`Password mismatch!`);

        let user = await User.findOne({
          where: {
            email,
          },
        });

        // User emails are unique
        if (user)
          throw boom.badRequest(`User with the email: ${email} already exist`);

        // Only admins can create another user
        if (created_by && user.access_level < 2)
          throw boom.unauthorized(`User cannot perform action`);

        // Generate fake password if none is provided
        if (!password) {
          password_is_unknown = true;
          password = faker.internet.password();
          extraComment += `<div><p>Generated password: <em>${password}</em></p> <strong><br/>We strongly advise that you change your password later!</strong></div>`;
        }

        return await sequelize.transaction(async (t) => {
          let referrer_id;
          let where = {
            invite_code: others.invite_code,
          };
          let ref = await Profile.findOne({
            where,
          });

          if (ref) {
            const referrer = await ref.getUser();
            referrer_id = referrer.id;
          }

          let newUser = {
            data: {
              email,
              password_is_unknown,
              password,
              access_level,
              referrer_id,
              ...(created_by && { created_by: created_by?.id, verified: true }),
            },
            options: {
              transaction: t,
            },
          };

          // Create new User
          return await User.create(newUser.data, newUser.options).then(
            async (user) => {
              const token = jwt.create(user?.id, JWT_SCOPES?.verifyEmail);
              const actions = [];
              ``;

              // Create user profile
              actions.push(
                async () =>
                  await user.createProfile(
                    {
                      email,
                      ...others,
                    },
                    {
                      transaction: t,
                    }
                  )
              );
              // Create User security
              actions.push(
                async () => await user.createSecurity({}, { transaction: t })
              );
              // Create User address
              // actions.push(
              //   async () => await user.createAddress({}, { transaction: t })
              // );

              if (+user?.access_level < 2) {
                // create user Email Kyc
                actions.push(
                  async () =>
                    await user
                      .createKyc({ type: KYC_TYPES.EMAIL }, { transaction: t })
                      .catch(console.error)
                );

                // if there's an invite code, relate users
                if (others?.invite_code) {
                  // let where = {
                  //   invite_code: others.invite_code,
                  // };
                  // let ref = await Profile.findOne({
                  //   where,
                  // });

                  if (ref) {
                    ref = await ref.getUser();

                    let foundAffiliate = await Affiliate.findOne({
                      where: { user_id: user?.id },
                    });
                    actions.push(
                      async () =>
                        await Affiliate.upsert(
                          {
                            ...(foundAffiliate
                              ? {
                                  id: foundAffiliate?.id,
                                  friends: [...foundAffiliate?.friends, ref],
                                }
                              : { friends: [ref] }),
                          },
                          {
                            transaction: t,
                          }
                        ).catch(console.error)
                    );
                  }
                }
                // create user wallet
                actions.push(
                  async () =>
                    await user.createSupportedWallet({
                      transaction: t,
                    })
                  // .catch(console.error)
                );
              }
              // Send email
              actions.push(
                async () =>
                  await User.sendConfirmationMail({
                    to: email,
                    extraComment,
                    password,
                    token,
                  }).catch(console.error)
              );

              // Call all actions
              await Promise.all(actions.map((fn) => fn())).catch((err) => {
                throw new Error(err);
              });

              // Get public data
              let publicData = user.toPublic();
              // return
              return {
                email: publicData?.email,
                message: "User created successfully",
                status: true,
              };
            }
          );
        });
      } catch (err) {
        return boom.isBoom(err) ? err : boom.internal(err.message, err);
      }
    };

    toPublic() {
      return _.omit(this.toJSON(), ["password"]);
    }


    /**
     * 
     * @param {Object} payload 
     * @param {String} payload.secret
     * @param {String} payload.encoding
     * @param {String} payload.encoding
     * @returns {Promise<{status:"error"|"success"}>}
     */
    registerGoogleAuthenticator = async (payload) =>{
      // set 2 factor on user to true
      let schema = Joi.object({
        secret:Joi.string().required(),
        encoding:Joi.string().required()
      })
      const {error,value} = schema.validate(payload)

      if(error){
        throw new Error(error)
      }

      /**
       * @type {Model}
       */
      let security = await this.getSecurity()
      security.metadata = value
      security.save()

      return {status:'success'}
    }




    /**
     * 
     * @param {Object} payload 
     * @param {String} payload.token
     * @returns {Promise<AuthData>}
     */
    verifyGoogleAuthenticator = async (payload) =>{

    }

    /**
     *
     * @param {import('../../schema/logger.metadata.schema').SESSIONSchema} metadata
     * @returns {Promise<import('../../schema/others').StatusResponse>}
     */
    async logSession(metadata) {
      metadata.last_seen = this.last_seen;
      /**
       * @type Model
       */
      const Logger = sequelize.models.Logger;
      const logs = await this.getLoggers({
        order: [
          ["createdAt", "DESC"],
          ["updatedAt", "DESC"],
        ],
      });

      const latestLog = logs[0];

      if (latestLog) {
        switch (metadata.login_status) {
          case LOG_STATUSES.LOG_OUT: {
            metadata.login = latestLog.login;
            break;
          }
        }
      }

      await Logger.create({
        user_id: this.id,
        type: LOG_TYPES.SESSION,
        metadata,
      });

      return { status: "success", message: "session log has been created" };
    }

    /**
     *
     * @param {import('../../schema/logger.metadata.schema').SMSSchema} metadata
     * @returns {Promise<import('../../schema/others').StatusResponse>}
     */
    async logSMS(metadata) {
      /**
       * @type {Model}
       */
      const Logger = sequelize.models.Logger;
      await Logger.create({
        type: LOG_TYPES.SMS,
        metadata,
      });

      return { status: "success", message: "sms log has been created" };
    }
    /**
     *
     * @param {String} message SMS message
     * @param {String} phone Phone number
     * @returns
     */
    async sendSMS(message = "Welcome to CoinTC", phone) {
      phone = phone || this?.profile?.phone;

      if (
        ![
          process.env.TWILLOW_ACCOUNTS_ID,
          process.env.TWILLOW_AUTH_TOKEN,
          process.env.TWILLOW_PHONE_NUMBER,
        ].every((v) => v)
      )
        throw new Error(
          "TWILLOW_ACCOUNTS_ID, TWILLOW_AUTH_TOKEN and TWILLOW_PHONE_NUMBER must be provide in the enviroment variable"
        );

      const client = new twilio(
        process.env.TWILLOW_ACCOUNTS_ID,
        process.env.TWILLOW_AUTH_TOKEN
      );

      let result = await client.messages.create({
        body: message,
        to: phone, // Text this number
        from: process.env.TWILLOW_PHONE_NUMBER, // From a valid Twilio number
      });
      // .then((message) => console.log(message.sid));

      return { status: Boolean(result) };
    }

    /**
     *
     * @param {{email:String,phone:String,subject:String,template:String}} param0
     * @param {"phone"|"email"} [type="*"]
     * @returns
     */
    async sendOTP(
      {
        email,
        phone,
        subject = "OTP confirmation",
        template = "otp_confirmation",
      },
      type = "*"
    ) {
      const errors = {};
      let time_left = 60;

      try {
        // generate OTP and set OTP TTL
        let otp = generator.otp();
        let otp_ttl = dfn.addMinutes(new Date(), 14);

        // Get user security
        let security = await this.getSecurity();
        if (security) {
          // if user created_at from now is less than a minute; don't create new otp
          let now = new Date();
          let former = new Date(security?.updatedAt);
          let diff = dfn.differenceInSeconds(now, former, {
            roundingMethod: "floor",
          });
          if (diff < time_left) {
            time_left = Math.abs(time_left - diff);
            errors.timeout = boom.locked(
              `Try again after ${time_left} secs`
            )?.output?.payload;
          } else await security.update({ otp, otp_ttl });
        } else await this?.createSecurity({ otp, otp_ttl });

        if (!Object.keys(errors)?.length) {
          let OTPMessage = `Your verification PIN is ${otp}`;

          switch (type) {
            case "*":
            case "phone": {
              // Use new phone number or existing
              phone = phone || this?.profile?.phone;
              if (!phone) {
                errors.sms(`User phone number is required to send OTP via SMS`);
                return;
              }
              //  SEND SMS
              await this.sendSMS(OTPMessage, phone).catch((err) => {
                errors.sms = boom.notAcceptable(
                  err.message || `SMS service cannot be reached`
                )?.output?.payload;
              });
              break;
            }
            case "*":
            default: {
              // Use new email or existing
              const { sendMail } = await setupMailer().catch(console.error);
              email = email || this?.email;
              if (!email) {
                errors.mail(`User email is required to send OTP via mail`);
                return;
              }

              await sendMail({
                template,
                transforms: {
                  email,
                  otp: OTPMessage,
                  subject,
                },
                subject,
                to: email,
              }).catch((err) => {
                errors.mail = boom.serverUnavailable(
                  err.message || `Mail service cannot be reached`
                )?.output?.payload;
              });
            }
          }
        }

        return {
          time_left,
          data: {
            phone,
            email,
            id: this?.id,
          },
          errors,
        };
      } catch (err) {
        return boom.isBoom(err) ? err : boom.boomify(err);
      }
    }

    /**
     * @description retrieve user wallet earnings
     * @returns
     */
    getEarning = async function() {
      const loggers = await this.getLoggers({
        where: {
          type: LOG_TYPES.COMMISSION,
        },
      });

      return loggers.reduce(
        (previous, current) =>
          previous + Number(current.metadata.commission_earned),
        0
      );
    };

    /**
     *
     * @param {Object} options query options
     * @returns
     */
    createSupportedWallet = async ({ transaction } = {}) => {
      try {
        /**
         * @type {import('../../wallet.plugin/wallet.interface').WalletSchema[]}
         */
        const presentWallets = await this.getWallets();
        const presentCurrencies = presentWallets.map(
          (wallet) => wallet.currency
        );

        await Promise.all(
          Object.keys(SUPPORTED_TOKENS)
            .filter((currency) => !presentCurrencies.includes(currency))
            .map((currency) => this.createWallet({ currency }, { transaction }))
        );
        return { status: "success" };
      } catch (error) {
        console.error(error);
        return boom.boomify(error);
      }
    };
    /**
     *
     * @param {String} user
     * @param {Object} include Object to include
     * @returns
     */
    login = async (user, include) => {
      user.login_at = new Date();
      await user?.save();
      await user.logSession({
        last_seen: null,
        login: new Date(),
        logout: null,
        login_status: LOG_STATUSES.LOG_IN,
      });
      return {
        token: jwt.create(user?.id),
        ...user.toPublic(),
        ...include,
      };
    };

    /**
     * @description Logs out user
     * @returns
     */
    logout = async () => {
      try {
        await this.logSession({
          duration: new Date() - new Date(this.last_login),
          last_seen: this.last_seen,
          login: this.last_login,
          logout: new Date(),
          login_status: LOG_STATUSES.LOG_OUT,
        });
        return { status: true };
      } catch (error) {
        console.error(error);
        return boom.isBoom(err) ? err : boom.boomify(error);
      }
    };

    /**
     *
     * @param {Object} payload
     * @param {String} payload.ip_address
     * @returns
     */
    authenticate = async ({ ip_address }) => {
      if (!this?.active)
        return {
          status: false,
          user_id: this?.id,
          reason: "inactive",
          message: `Account has been deactivated. Contact Administrator`,
        };

      if (this?.access_level < 2) {
        // check if this has verify email
        let emailKyc = await this.getKyc({
          where: {
            type: KYC_TYPES.EMAIL,
            status: KYC_STATUSES.ACCEPTED,
          },
        });

        if (!emailKyc)
          return {
            status: false,
            user_id: this?.id,
            email: this?.email,
            reason: "unverified",
            message: "Account exist but is not verified",
          };
      }

      //  get account Security setting
      let security = await this.getSecurity();
      // check if ip_address is in list of ip addresses in security
      if (ip_address && security) {
        security.ip_address = ip_address;
        security.save();
      }

      return {
        user_id: this?.id,
        email: this?.email,
        status: true,
        security: security,
        two_factor_enabled: security?.two_factor,
      };
    };
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password_is_unknown: { type: DataTypes.BOOLEAN, defaultValue: true },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      // role: DataTypes.STRING,
      referrer_id: DataTypes.UUID,
      permission: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      archived_at: DataTypes.DATE,
      last_seen: DataTypes.DATE,
      login_at: DataTypes.DATE,
      verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
      access_level: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          isInt: true,
          max: 3,
        },
        defaultValue: 1,
      },
      // VIRTUALS
      online: {
        type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ["createdAt"]),
        get: function() {
          return this.get("updateAt") > Date.now() - 7 * 24 * 60 * 60 * 1000;
        },
      },

      isBasic: {
        type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ["access_level"]),
        get() {
          return this.get("access_level") === 1;
        },
      },

      isAdmin: {
        type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ["access_level"]),
        get() {
          return this.get("access_level") === 2;
        },
      },

      isSuperAdmin: {
        type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ["access_level"]),
        get() {
          return this.get("access_level") === 3;
        },
      },

    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      tableName: TABLE_NAMES?.USER || "tbl_users",
      paranoid: true,
      deletedAt: "archived_at",
      hooks,
      /* scopes: {
       
      }, */
    }
  );

  return User;
};

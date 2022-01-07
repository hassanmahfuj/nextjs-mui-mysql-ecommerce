import hash from "../lib/hash";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Cannot be Empty!",
          },
          notEmpty: {
            msg: "Cannot be Empty!",
          },
          isEmail: {
            msg: "Email is not valid!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Cannot be Empty!",
          },
        },
      },
    },
    {
      indexes: [{ unique: true, fields: ["email"] }],
      defaultScope: {
        attributes: { exclude: ["id"] },
      },
      hooks: {
        beforeCreate: (user) => (user.password = hash(user.password)),
      },
    }
  );

  return User;
};

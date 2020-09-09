module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      attack: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      hitpoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      type: {
          type: DataTypes.STRING,
          allowNull: false
      }
      

    });
  
    Character.associate = function(models) {
        Character.belongsTo(models.User, {
        foreignKey : {
          allowNull: false
        }
      })
    }
  
  
  
    return Character;
  };
  
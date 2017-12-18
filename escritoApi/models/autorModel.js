 module.exports = (sequelize, Sequelize) => {
    const Autor = sequelize.define("Autor", {
     id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
     },
     name: {
     type: Sequelize.STRING,
     allowNull: false,
     validate: {
     notEmpty: true
     }
     },
     password: {
     type: Sequelize.STRING,
     allowNull: false,
     validate: {
     notEmpty: true
     }
     },
     email: {
     type: Sequelize.STRING,
     unique: true,
     allowNull: false,
     validate: {
     notEmpty: true
     }
     }
     }, {
     classMethods: {
     associate: (models) => {
     Autor.hasMany(models.Libro,{foreignKey:'libro_id'});
     }
     }
     });
     return Autor;
      };
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const path= require('path');

let db = null;

module.exports = app =>{
     if(!db){
      const sequelize = new Sequelize('tareas', 'juan', 'juan', {
        host: 'localhost',
        dialect: 'sqlite',
      
        pool: {
          max: { [Op.eq]:5},
          min: { [Op.eq]:0},
          acquire: { [Op.eq]:30000},
          idle:{ [Op.eq]:10000}
        },
      
        // SQLite only
        storage: 'database.sqlite'
      });

          db = {
            sequelize,Sequelize
          };

          

         db.autores = sequelize.import(__dirname + "/models/autorModel")
          db.libros = sequelize.import(__dirname + "/models/libroModel")
     }


  return db;
}








/*
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
*/
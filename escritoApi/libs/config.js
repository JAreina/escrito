module.exports={
    database: "tareas",
    username:"juan",
    password:"juan",
    params:{
        host: 'localhost',
        dialect: 'sqlite',
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
        },
    storage:"database.sqlite"
}
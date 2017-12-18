module.exports=app=>{
    app.db.sequelize.sync({force:true}).done(()=>{
        app.listen(app.get("port"),()=>{
            console.log(`EXPRESS FUNCIONA en PUERTO :${app.get("port")}`)
        }) 
    });
   
}
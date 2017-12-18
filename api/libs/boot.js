module.exports=app=>{
    app.listen(app.get("port"),()=>{
        console.log(`EXPRESS FUNCIONA en PUERTO :${app.get("port")}`)
    }) 
}
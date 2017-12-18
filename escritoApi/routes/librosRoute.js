module.exports= app =>{

    const Libros = app.db.libros;
    
    app.get("/libros",(req,res)=>{
        
           Libros.findAll({}).then(data=>{
               res.json({libros: data})
           });
        });
};
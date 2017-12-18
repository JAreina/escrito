module.exports= app =>{

    const Tareas = app.models.tareasModel;
    
    app.get("/tareas",(req,res)=>{
        
           Tareas.findAll({},(data)=>{
               res.json({tareas: data})
           });
        });
};
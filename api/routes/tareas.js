module.exports= app =>{
    app.get("/tareas",(req,res)=>{
        res.json({
            tareas: [
                
                {title:"tarea1"},
                {title: "tarea 2"}
            ]
        })
    })
}
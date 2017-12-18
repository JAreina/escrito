module.exports = app =>{
    return {
        findAll: (params,callback)=>{
            return callback([
                {title:"tarea1"},
                {title: "tarea 2"}
            ])
        }
    }
}
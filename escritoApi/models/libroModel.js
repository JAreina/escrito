module.exports = (sequelize,Sequelize) =>{
    const Libro = sequelize.define("Libro",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type:Sequelize.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            }
         
         },
         fecha:{
           type:Sequelize.DATE,
           allowNull:false
         }
        },//fin de objeto
        {
            classMethods:{
                associate:(models)=>{
                    Libro.belongTo(models.Autor,{foreignKey:'autor_id'});
                }
            }
        });

return Libro;
};
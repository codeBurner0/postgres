import {Sequelize,DataTypes} from 'sequelize'

export const userModel=(sequelize)=>{
 return sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
 })

}


// migration
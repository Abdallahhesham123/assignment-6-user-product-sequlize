import{sequelize} from '../connection.js'
import {  DataTypes} from "sequelize";
const UserModel= sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(150),
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING(150),
        allowNull:false,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true,
    }
})

export default  UserModel;
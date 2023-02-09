import{sequelize} from '../connection.js'
import {  DataTypes} from "sequelize";
import User from "./User.model.js"
const ProductModel= sequelize.define("Product",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true,
        autoIncrement:true,
    },
    pName:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    pDescription:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    user_Id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:User,
            key:'id',
            onDelete:"CASCADE",
            onUpdate:"CASCADE"
        }

    }
})
export default  ProductModel;
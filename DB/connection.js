import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('user-product-ass6', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' ,
  });

  export const connectDB=async()=>{

return await sequelize.sync({alter:false}).then(result =>{
    console.log(`DataBase Connected Successfully`)
}).catch(err=> console.log(`Fail To Connected ....${err}`))
  }
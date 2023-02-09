import UserModel from "../../../../DB/model/User.model.js";
import ProductModel from "../../../../DB/model/Product.model.js";
import { Op } from "sequelize";
export const getUser = async (req, res, next) => {
  try {
    const users = await UserModel.findAll({});
    return res.json({ message: "Done", users });
  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const { name, email, age, password } = req.body;
    const { id } = req.params;
   const result= await UserModel.update({ name, email, age, password  }, {
      where: {
        id
      }
    });
  if (result[0] === 1){
    return res.json({ message: "this user is updated successfully"});
  }else{
    return res.json({ message: "this user doesnt Exist please check"});
  }
   
  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const deleteUser = async (req, res, next) => {
  try {
 
    const { id } = req.params;
   const result= await UserModel.destroy( {
      where: {
        id
      }
    });
  if (result == 1 ){
    return res.json({ message: "this user is deleted successfully"});
  }else{
    return res.json({ message: "this user doesnt Exist please check" });
  }
   
  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const searchUser = async (req, res, next) => {
  try {
    const { age } = req.query;
   const users= await UserModel.findAll({
    attributes: ['id', 'name', 'email', 'age'],
      where: {
        name: {
          [Op.like]: `a%`
        },
        age:{
           [Op.lte]: age
          } 
      }
    });
if(users.length > 0){
  return res.json({ message: "Done" ,users});
}else{
  return res.json({ message: "there is no result please try again" });
}
  

  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const getalluserwithlistids = async (req, res, next) => {
  try {
    const { id1 ,id2} = req.query;
   const users= await UserModel.findAll({
    attributes: ['id', 'name', 'email', 'age'],
      where: {
        id: {
          [Op.in]: [`${id1}`, `${id2}`]
        }
      }
    });
if(users.length > 0){
  return res.json({ message: "Done" ,users});
}else{
  return res.json({ message: "there is no result please try again" });
}
  

  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const getuserwithproduct = async (req, res, next) => {
  try {
    UserModel.hasMany(ProductModel,{
         foreignKey: "user_Id",
      targetKey: "id",
    })
   const users= await UserModel.findAll({
    attributes:{exclude:['password' ,'createdAt','updatedAt']},
include:{
  model:ProductModel,
  attributes:{exclude:['user_Id','createdAt','updatedAt']}
}
    });
if(users.length > 0){
  return res.json({ message: "Done" ,users});
}else{
  return res.json({ message: "there is no result please try again" });
}
  

  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};



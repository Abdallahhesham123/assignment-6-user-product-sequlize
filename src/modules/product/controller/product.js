
import ProductModel from "../../../../DB/model/Product.model.js";
import UserModel from "../../../../DB/model/User.model.js";
import { Op } from "sequelize";
export const getProductModule = async (req, res, next) => {
  try {
    const products = await ProductModel.findAll({});
    return res.json({ message: "Done", products });
  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const addProduct = async (req, res, next) => {
  try {
    const { user_Id } = req.query;
    const { pName, pDescription, price } = req.body;
    let UserExist = await UserModel.findAll({
      where:{
        id: user_Id
      }
    })
    if(UserExist.length === 0){
      res.json({ message: "This user isnot Exist Try again"})
    }else{
      const Product = await ProductModel.create({ pName, pDescription, price,user_Id });
      return res.json({ message: "Your Product is added Successfully", Product });

    }

  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const { user_Id } = req.query;
    const { id } = req.params;
    const { pName, pDescription, price } = req.body;
    let UserExist = await UserModel.findAll({
      where:{
        id: user_Id
      }
    })
    if(UserExist.length === 0){
      res.json({ message: "This user isnot Exist Try again"})
    }else{
      const Product = await ProductModel.update({ pName, pDescription, price },{
        where:{
          id,user_Id
        }
      });
      if (Product[0] === 1){
        return res.json({ message: "this product is updated successfully"});
      }else{
        return res.json({ message: "you cant update this product"});
      } 

    }

  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const { user_Id } = req.query;
    const { id } = req.params;
   
    let UserExist = await UserModel.findAll({
      where:{
        id: user_Id
      }
    })
    if(UserExist.length === 0){
      res.json({ message: "This user isnot Exist Try again"})
    }else{
      const Product = await ProductModel.destroy({
        where:{
          id,user_Id
        }
      });
      if (Product == 1){
        return res.json({ message: "this product is deleted successfully"});
      }else{
        return res.json({ message: "you cant delete this product"});
      } 

    }

  } catch (error) {
    return res.json({
      message: "Catch error",
      error,
      stack: error.stack,
    });
  }
};
export const searchProduct = async (req, res, next) => {
  try {
    const { price} = req.query;
   

      const Product = await ProductModel.findAll({
        where: {
          price:{
            [Op.gt]: `${price}`
           } 
        }
      });
      if(Product.length > 0){
        return res.json({ message: "Done" ,Product});
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




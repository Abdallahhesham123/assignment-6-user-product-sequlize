import {Router} from 'express'
import * as productController from  './controller/product.js'
const router = Router();


router.get("/" , productController.getProductModule)
router.post("/" , productController.addProduct)
router.put("/update/:id" , productController.updateProduct)
router.delete("/delete/:id" , productController.deleteProduct)
router.get("/searchProduct" , productController.searchProduct)

export default  router
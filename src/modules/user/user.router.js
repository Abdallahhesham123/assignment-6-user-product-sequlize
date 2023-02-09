import {Router} from 'express'
import * as userController from  './controller/user.js'
const router = Router();


router.get("/" , userController.getUser)
router.put("/update/:id" , userController.updateUser)
router.delete("/delete/:id" , userController.deleteUser)
router.get("/search" , userController.searchUser)
router.get("/getalluserwithlistids" , userController.getalluserwithlistids)
router.get("/getuserwithproduct" , userController.getuserwithproduct)

export default  router
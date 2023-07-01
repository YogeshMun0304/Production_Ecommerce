import express  from "express";
import {registerController, loginController, testController, forgotPasswordController, updateProfileController, orderStatusController, getAllOrdersController, getOrdersController} from '../controllers/registerController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddlware.js";
const router = express.Router()


router.post('/register',registerController)
router.post('/login',loginController)

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  router.get("/admin-auth", requireSignIn, isAdmin,(req, res) => {
    res.status(200).send({ ok: true });
  });
router.post("/forgot-password", forgotPasswordController);
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router

import  express  from "express";
import { test, updateUser, deleteUser, signout, getUsers } from "../controllers/userController.js";
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {

    const errorHandler = (statusCode, message) => {
      const error = new Error();
      error.statusCode = statusCode;
      error.message =  message;
      return error;
  };
    const token = req.cookies.access_token;
    if (!token) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(errorHandler(401, 'Unauthorized'));
      }
      req.user = user;
      next();
    });
  };




const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);




export default router;
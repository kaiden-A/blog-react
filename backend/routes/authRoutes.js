import { Router } from "express";
import adminRoutes from './adminRoutes.js';
import frontRoutes from './frontRoutes.js';
import {post_login , post_signup} from '../controllers/authController.js'

const router = Router();


router.post('/login' ,post_login);
router.post('/signup' , post_signup);


router.use('/front' , frontRoutes);
router.use('/admin' , adminRoutes);


export default router;
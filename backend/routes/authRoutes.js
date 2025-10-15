import { Router } from "express";
import adminRoutes from './adminRoutes.js';
import userRoutes from './userRoutes.js';

const router = Router();



router.use('/user' , userRoutes);
router.use('/admin' , adminRoutes);


export default router;
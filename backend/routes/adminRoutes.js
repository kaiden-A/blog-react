import { Router } from "express";
import { delete_blog, post_blog, post_profile, update_blog } from "../controllers/adminController.js";


const router = Router();

router.post('/blogs' , post_blog);
router.put('/blogs/:id' , update_blog);
router.delete('/blogs/:id' , delete_blog);

router.post('/profiles' , post_profile);



export default router;
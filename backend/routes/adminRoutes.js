import { Router } from "express";
import { 
    delete_blog, 
    get_admin, 
    get_profile, 
    post_blog, 
    post_profile, 
    update_blog 
} from "../controllers/adminController.js";


const router = Router();

router.get('/' , get_admin);
router.get('/profile' , get_profile)

router.post('/blogs' , post_blog);
router.put('/blogs/:id' , update_blog);
router.delete('/blogs/:id' , delete_blog);

router.post('/profiles' , post_profile);



export default router;
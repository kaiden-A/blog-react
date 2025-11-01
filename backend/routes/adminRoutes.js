import { Router } from "express";
import { 
    delete_blog, 
    get_admin, 
    get_profile, 
    get_profile_change, 
    manage_blog, 
    post_blog, 
    post_profile,
    update_profiles, 
    update_blog, 
    update_password,
    get_followers,
    update_followes
} from "../controllers/adminController.js";


const router = Router();

router.get('/' , get_admin);
router.get('/profile' , get_profile);
router.get('/blogs' , manage_blog)

router.post('/blogs' , post_blog);
router.put('/blogs/:id' , update_blog);
router.delete('/blogs/:id' , delete_blog);

router.get('/profiles' , get_profile_change);
router.put('/profiles' , update_profiles)
router.post('/profiles' , post_profile);

router.put('/passwords' , update_password);

router.get('/followers' , get_followers);

router.put('/followers/:id' , update_followes)



export default router;
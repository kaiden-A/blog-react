import { Router } from "express";
import { get_username  , get_individual_blog, get_homepage, post_follow} from "../controllers/frontController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

router.get('/' , get_homepage)
router.get('/:username' , get_username);
router.get('/:username/:id' , get_individual_blog);

router.post('/follows/:authorId' , requireAuth , post_follow);


export default router;
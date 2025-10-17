import { Router } from "express";
import { get_username  , get_individual_blog, get_homepage} from "../controllers/frontController.js";

const router = Router();

router.get('/' , get_homepage)
router.get('/:username' , get_username);
router.get('/:username/:id' , get_individual_blog)


export default router;
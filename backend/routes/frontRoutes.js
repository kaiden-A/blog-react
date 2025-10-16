import { Router } from "express";
import { get_username } from "../controllers/frontController.js";

const router = Router();

router.get('/:username' , get_username);


export default router;
import { Router } from "express";
import IndexController from "../controllers/IndexController";

const router = new Router();

router.get("/", IndexController.handle);
//router.route("/api/v1/article").get(IndexController.handle);
export default router;

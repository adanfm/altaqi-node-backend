import { Router } from "express";
import ArticleController from "../controllers/ArticleController";
import IndexController from "../controllers/IndexController";
const router = new Router();

router.get("/", IndexController.handle);

router.get("/articles", ArticleController.index);
router.get("/articles/:id", ArticleController.show);
router.delete("/articles/:id", ArticleController.delete);
router.put("/articles/:id", ArticleController.update);
router.post("/articles", ArticleController.store);

export default router;

import { Router } from "express";
import ArticleController from "../controllers/ArticleController";
import IndexController from "../controllers/IndexController";

const router = new Router();

router.get("/", IndexController.handle);

router.get("/api/v1/articles", ArticleController.index);
router.get("/api/v1/articles/:id", ArticleController.show);
router.delete("/api/v1/articles/:id", ArticleController.delete);
router.put("/api/v1/articles/:id", ArticleController.update);
router.post("/api/v1/articles", ArticleController.store);
//router.route("/api/v1/article").get(IndexController.handle);
export default router;

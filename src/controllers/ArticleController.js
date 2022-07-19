import ArticleService from "../services/ArticleService";

class ArticleController {
    async index(req, res) {
        const service = new ArticleService();
        const { page, perPage } = req.query;

        const response = await service.paginate(page, perPage);
        return res.status(response.statusCode).json(response.data);
    }

    async store(req, res) {
        const service = new ArticleService();
        const data = req.body;

        const response = await service.create(data);
        return res.status(response.statusCode).json(response.data);
    }

    async delete(req, res) {
        const service = new ArticleService();
        const { id } = req.params;

        const response = await service.delete(id);
        return res.status(response.statusCode).json(response.data);
    }

    async update(req, res) {
        const service = new ArticleService();

        const { id } = req.params;
        const data = req.body;

        const response = await service.update(id, data);
        return res.status(response.statusCode).json(response.data);
    }

    async show(req, res) {
        const service = new ArticleService();
        const { id } = req.params;

        const response = await service.findId(id);
        return res.status(response.statusCode).json(response.data);
    }
}

export default new ArticleController();

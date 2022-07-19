import Article from "../models/Article";

class ArticleService {
    async paginate(page = 1, perPage = 15) {
        try {
            const myCustomLabels = {
                totalDocs: "totalItems",
                docs: "data",
                limit: "perPage",
                page: "currentPage",
                totalPages: "pageCount",
                meta: "paginator",
            };

            const options = {
                page: page,
                limit: perPage,
                customLabels: myCustomLabels,
            };

            const data = await Article.paginate({}, options);
            return {
                statusCode: 200,
                data,
            };
        } catch (error) {
            return {
                statusCode: 400,
                data: { message: "Erro ao listar os artigo" },
            };
        }
    }

    async create(article) {
        try {
            const data = await Article.create(article);
            return { statusCode: 201, data };
        } catch (error) {
            return {
                statusCode: 400,
                data: { message: "Erro ao criar o artigo" },
            };
        }
    }

    async findId(id) {
        try {
            const data = await Article.findOne({ _id: id }).select({
                id: 0,
                __v: 0,
            });

            if (data === null) {
                return {
                    statusCode: 404,
                    data: { message: "Artigo não encontrado" },
                };
            }
            return { statusCode: 200, data };
        } catch (error) {
            return {
                statusCode: 400,
                data: { message: "Erro ao buscar o artigo" },
            };
        }
    }

    async delete(id) {
        try {
            await Article.deleteOne({ _id: id });
            return { statusCode: 204, data: {} };
        } catch (error) {
            return {
                statusCode: 400,
                data: { message: "Erro ao deletar o artigo" },
            };
        }
    }

    async update(id, article) {
        try {
            await Article.findOneAndUpdate({ _id: id }, article);
            const data = await Article.findOne({ _id: id });

            return { statusCode: 200, data };
        } catch (error) {
            return {
                statusCode: 400,
                data: {
                    message: "Erro ao atualizar o artigo!",
                },
            };
        }
    }

    async findByTitle(title) {
        return await Article.findOne({ title: title });
    }
}

export default ArticleService;

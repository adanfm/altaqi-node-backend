import axios from "axios";
import Article from "../models/Article";

import ArticleService from "../services/ArticleService";

const InitialSyncCommand = async () => {
    try {
        const articles = await Article.find();
        if (articles.length === 0) {
            const apiUrl = process.env.BASEAPI_URL_SPACEFLIGHT;
            const articleService = new ArticleService();

            const api = axios.create({
                baseURL: apiUrl,
            });

            let i = 0;
            const limit = 500;
            const { data: countTotal } = await api.get("/articles/count");

            while (i < countTotal + limit) {
                let { data: response } = await api.get(
                    `/articles?_limit=${limit}&_start=${i}`
                );

                console.log(
                    `Buscando artigos /articles?_limit=${limit}&_start=${i}`
                );
                await response.map(async (data) => {
                    console.log(
                        `Inserindo o artigo ${data.id} : ${data.title}`
                    );
                    articleService.create(data);
                });

                i += limit;
            }
            console.log("Finalizado");
        }
    } catch (err) {
        console.error(err);
    }
};

export default InitialSyncCommand;

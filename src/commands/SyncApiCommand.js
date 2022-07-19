import axios from "axios";
import Article from "../models/Article";

import ArticleService from "../services/ArticleService";

const SyncApiCommand = async () => {
    try {
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
                let articleTemp = await articleService.findByTitle(data.title);

                if (articleTemp === null) {
                    console.log(
                        `Inserindo artigo na base de dados ${data.id} : ${data.title}`
                    );

                    await articleService.create(data);
                }
            });

            i += limit;
        }
        console.log("Finalizado");

        return;
    } catch (err) {
        console.error(err);
    }
};

export default SyncApiCommand;

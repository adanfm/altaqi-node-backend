import axios from "axios";
import Article from "../models/Article";

import ArticleService from "../services/ArticleService";
const InitialScriptData = async () => {
    const apiUrl = process.env.BASEAPI_URL_SPACEFLIGHT;

    const api = axios.create({
        baseURL: apiUrl,
    });

    try {
        const articles = await Article.find();
        if (articles.length === 0) {
            const articleService = new ArticleService();

            const { data: dataResponse } = await api.get(`/articles?_limit=-1`);
            await dataResponse.map(async (data) => {
                await articleService.create(data);
                console.log(`Insert ${data.id}`);
            });

            return;
        }
    } catch (err) {
        console.error(err);
    }
};

export default InitialScriptData;

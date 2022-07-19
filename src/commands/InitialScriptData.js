import axios from "axios";

import ArticleService from "../services/ArticleService";
const InitialScriptData = async () => {
    const apiUrl = process.env.BASEAPI_URL_SPACEFLIGHT;

    const api = axios.create({
        baseURL: apiUrl,
    });

    try {
        const articleService = new ArticleService();

        const { data: dataResponse } = await api.get(`/articles?_limit=-1`);
        await dataResponse.map(async (data) => {
            let lauche = [];
            data.launches.map((e) => {
                lauche.push(e);
            });

            let event = [];
            data.events.map((e) => {
                event.push(e);
            });

            await articleService.create(data, lauche, event);
            console.log(`Insert ${data.id}`);
        });

        return;
    } catch (err) {
        console.error(err);
    }
};

export default InitialScriptData;

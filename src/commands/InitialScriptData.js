import axios from "axios";
import App from "../App";
import Article from "../models/Article";

const InitialScriptData = async () => {
    const apiUrl = process.env.BASEAPI_URL_SPACEFLIGHT;

    const api = axios.create({
        baseURL: apiUrl,
    });

    const limitRequest = 200;
    try {
        //const { data } = await api.get(`/articles?_limit=${limitRequest}`);
        let lauche = [];
        let event = [];

        let newArticle = new Article();

        newArticle.id = 999999;
        newArticle.title = "Teste";
        newArticle.url = "http://www.google.com";
        newArticle.imageUrl = "http://www.google.com";
        newArticle.newsSite = "http://www.google.com";
        newArticle.summary = "Summary";
        newArticle.publishedAt = new Date();
        newArticle.updatedAt = new Date();
        newArticle.featured = false;
        newArticle.lauches = lauche;
        newArticle.events = event;

        await newArticle.save();

        return;
    } catch (err) {
        console.error(err);
    }
};

export default InitialScriptData;
async () => {
    InitialScriptData();
};

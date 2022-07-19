import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const articleSchema = new Schema({
    id: Number,
    title: String,
    url: String,
    imageUrl: String,
    newsSite: String,
    summary: String,
    publishedAt: Date,
    updatedAt: Date,
    featured: Boolean,
    lauches: Array,
    events: Array,
});

articleSchema.index({ title: "text" });
articleSchema.plugin(paginate);

export default model("Article", articleSchema);

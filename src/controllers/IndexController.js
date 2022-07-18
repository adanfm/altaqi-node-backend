class IndexController {
    handle(req, res) {
        const message = "Back-end Challenge 2021 🏅 - Space Flight News";
        return res.json({ message });
    }
}

export default new IndexController();

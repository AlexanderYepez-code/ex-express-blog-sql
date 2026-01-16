import posts from "../data/post.js";

export default function verificaId(req, res, next) {
    const id = parseInt(req.params.id);
    const game = posts.find(game => game.id === id);

    if (!game) {
        return res.status(404).json({
            message: "Post del gioco non a disposizione",
        });
    }

    req.game = game;
    next();
}

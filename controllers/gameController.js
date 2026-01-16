import  posts  from "../data/post.js"

function index(req, res) {
    const risposta = {
        count: posts.length,
        results: posts
    }
    res.json(risposta)
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const game = posts.find(game => game.id === id);

    if (game === undefined) {
        res.status(404);
        return res.json({
            message: "Gioco non a disposizione",
        })
    }
    res.json(game)

}

function store(req, res) {
    const dati = req.body;
    const newId = posts[posts.length - 1].id +1;
    console.log(dati)
    const newGame = {
        id: newId,
        titolo: dati.titolo,
        contenuto: dati.contenuto,
        immagine: dati.immagine,
        tags: dati.tags,
       
    };
    posts.push(newGame)

    res.status(201);

    res.json(newGame)
}

function update(req, res) {
    const id = parseInt(req.params.id);

    const dati = req.body;
    console.log(dati);

    const gioco = posts.find((game) => game.id === id);
    if(gioco === undefined){
        res.status(404);
        return res.json({
            message: "Not found",
        });
    }

    gioco.titolo= dati.titolo;
    gioco.contenuto= dati.contenuto;
    gioco.tags= dati.tags;
    res.send("aggiorna gioco n." + id)
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna parzialemte gioco n." + id)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const gameIndex = posts.findIndex((game) => game.id === id)

    if (gameIndex === -1) {
        res.status(404)
        return res.json({
            message: "gioco non disponibile"
        })
    }
    posts.splice(gameIndex, 1)
    res.sendStatus(204)

}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,

};
export default controller;
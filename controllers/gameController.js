import posts from "../data/post.js"
import connection from "../data/db.js";

function index(req, res) {
    const query = "SELECT * FROM `posts`"
    connection.query(query, (err, result) => {
        if (err) {
            res.status(500);
            return res.json({
                message: "internal server error"
            });
        }

        res.json({
            results: result
        })
    })


};

function show(req, res) {
    const id = req.params.id;
    const query = "SELECT * FROM `posts` WHERE `posts`.`id`= ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500);
            return res.json({
                message: "error server"
            })

        }
        if (result.length === 0) {
            res.status(404);
            res.json({
                message: "post non trovato",
            });

        } else {
            const pizza = result[0];
            res.json(pizza)
        }
    })

}

function store(req, res) {
    const dati = req.body;
    const newId = posts[posts.length - 1].id + 1;
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
    if (gioco === undefined) {
        res.status(404);
        return res.json({
            message: "Not found",
        });
    }

    gioco.titolo = dati.titolo;
    gioco.contenuto = dati.contenuto;
    gioco.tags = dati.tags;
    res.send("aggiorna gioco n." + id)
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna parzialemte gioco n." + id)
}

function destroy(req, res) {
    const id = req.params.id;
    const query = "DELETE FROM `post` WHERE `id`= ?"
    connection.query(query, [id],(err) => {
        if(err) {
            res.status(500);
            return res.json({
                message: "error server"
            })

        }
        res.sendStatus(204);
    })
    



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
import express from "express";
import gamesRouter from "./routers/games.js";
import posts from "./data/post.js"
import verificaPercorso from "./middlewares/verificapercorso.js";

const app = express();
const port = 3000;



app.get("/", (req, resp) =>{
    resp.json(posts)
});

app.use(express.static("public"));
app.use(express.json());


app.use("/posts", gamesRouter);


app.listen(port, function(){
    console.log("Il server sta ascoltando sulla porta " + port)
});
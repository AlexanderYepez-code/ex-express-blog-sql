export default function verificaPercorso(req, res, next){
    res.status(404)
    res.json({
        error: "Non trovato",
        message: "Pagina non trovata"
    });
    
}
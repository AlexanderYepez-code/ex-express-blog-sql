import express from "express";
import gameController from "../controllers/gameController.js";
import verificaId from "../middlewares/verificaid.js";


const router = express.Router();


//INDEX

router.get("/",verificaId, gameController.index)
//SHOW
router.get("/:id",verificaId, gameController.show)

//STORE
router.post("/",verificaId, gameController.store)

//UPDATE
router.put("/:id",verificaId, gameController.update)
//MODIFY
router.patch("/:id",verificaId, gameController.modify)
//DESTROY
router.delete("/:id",verificaId, gameController.destroy)

export default router;


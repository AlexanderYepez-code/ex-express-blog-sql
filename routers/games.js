import express from "express";
import gameController from "../controllers/gameController.js";
import verificaId from "../middlewares/verificaid.js";


const router = express.Router();


//INDEX

router.get("/", gameController.index)
//SHOW
router.get("/:id", gameController.show)

//STORE
router.post("/",gameController.store)

//UPDATE
router.put("/:id", gameController.update)
//MODIFY
router.patch("/:id", gameController.modify)
//DESTROY
router.delete("/:id", gameController.destroy)

export default router;


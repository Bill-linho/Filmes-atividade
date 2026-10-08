import { Router } from "express";
import { searchNominations } from "../controllers/search.Controller.js";

const searchRouter = Router();

searchRouter.get("/search", searchNominations);

export default searchRouter;

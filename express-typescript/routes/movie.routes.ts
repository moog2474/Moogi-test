import { getAll, getOne, create, deleteMovie, updateMovie } from "../controllers/movies.controller";

import { Router } from "express";


const route = Router();

route.get("/movie", getAll);
route.get("/movie/:_id", getOne)
route.post("/movie", create)
route.delete("/movie/:_id", deleteMovie)
route.put("/movie/:_id", updateMovie)
export default route;
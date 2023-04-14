import { getAll, getOne, create, deleteMovie, updateMovie, search, getGenres } from "../controllers/movies.controller";

import { Router } from "express";


const route = Router();

route.post("/movie", search);
route.get("/movies", getAll)
route.get("/movie/:_id", getOne)
route.post("/movie", create)
route.delete("/movie/:_id", deleteMovie)
route.put("/movie/:_id", updateMovie)
route.get("/moviegenres", getGenres)

export default route;
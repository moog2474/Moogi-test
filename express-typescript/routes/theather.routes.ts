import { getAll, getOne, create, deleteTheather, updateTheather } from "../controllers/theather.controller";

import { Router } from "express";


const route = Router();

route.get("/theather", getAll);
route.get("/theather/:_id", getOne)
route.post("/theather", create)
route.delete("/theather/:_id", deleteTheather)
route.put("/theather/:_id", updateTheather)
export default route;
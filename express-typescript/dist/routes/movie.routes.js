"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movies_controller_1 = require("../controllers/movies.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/movie", movies_controller_1.getAll);
route.get("/movie/:_id", movies_controller_1.getOne);
route.post("/movie", movies_controller_1.create);
route.delete("/movie/:_id", movies_controller_1.deleteMovie);
route.put("/movie/:_id", movies_controller_1.updateMovie);
exports.default = route;

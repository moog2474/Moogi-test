"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theather_controller_1 = require("../controllers/theather.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/theather", theather_controller_1.getAll);
route.get("/theather/:_id", theather_controller_1.getOne);
route.post("/theather", theather_controller_1.create);
route.delete("/theather/:_id", theather_controller_1.deleteTheather);
route.put("/theather/:_id", theather_controller_1.updateTheather);
exports.default = route;

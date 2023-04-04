"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const theatherSchema = new mongoose_1.Schema({
    theatherId: Number,
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: { type: String, enum: ["Point"], required: true },
            coordinates: [Number]
        }
    }
});
const Theather = (0, mongoose_1.model)("theaters", theatherSchema);
exports.default = Theather;

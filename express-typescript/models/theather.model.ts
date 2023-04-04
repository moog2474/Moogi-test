import { Schema, Types, model } from "mongoose";

interface ITheather {
    theatherId: number;
    location: {
        address: {
            street1: string;
            city: string;
            state: string;
            zipcode: string
        },
        geo: {
            type: string;
            coordinates: number[]
        }
    }
}

const theatherSchema = new Schema<ITheather>({
    theatherId: Number,
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: {type: String, enum:["Point"], required: true},
            coordinates: [Number]
        }
    }
 
})


const Theather = model<ITheather>("theaters", theatherSchema);

export default Theather;
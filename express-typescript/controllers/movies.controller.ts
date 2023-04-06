import Movies from '../models/movies.model';
import { Request, Response } from 'express';


const getAll = async (req: Request, res: Response) => {

    const {
        pageSize,
        filter: {searchTxt}
    } = req.body

    const count = pageSize * 30 + 1;

    const filter = {
        $or: [
            {title: {$regex: searchTxt, $options: "i"}}
            // {plot: {$regex: searchTxt}},
            // {fullplot: /.*m.*/}
        ],
    }

    try {
        const result = await Movies.find(filter).limit(30).skip(count);
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params
    try {
        const result = await Movies.findById({ _id });
        res.json({ status: true, result })

    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const create = async (req: Request, res: Response) => {

    try {
        const result = new Movies(req.body);
        const savedMovie = await result.save();
        res.json({ status: true, savedMovie })
    } catch (error) {
        res.json({ status: false, message: error })
    }
};

const deleteMovie = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movies.findByIdAndDelete({ _id })
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}

const updateMovie = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movies.findByIdAndUpdate({ _id }, req.body)
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}
export { getAll, getOne, create, deleteMovie, updateMovie }
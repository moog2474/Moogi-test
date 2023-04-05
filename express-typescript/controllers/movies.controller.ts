import Movie from '../models/movies.model';
import { Request, Response } from 'express';


const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await Movie.find({}).limit(100);
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params
    try {
        const result = await Movie.findById({ _id });
        res.json({ status: true, result })

    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const create = async (req: Request, res: Response) => {

    try {
        const result = new Movie(req.body);
        const savedMovie = await result.save();
        res.json({ status: true, savedMovie })
    } catch (error) {
        res.json({ status: false, message: error })
    }
};

const deleteMovie = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movie.findByIdAndDelete({ _id })
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}

const updateMovie = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Movie.findByIdAndUpdate({ _id }, req.body)
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}
export { getAll, getOne, create, deleteMovie, updateMovie }
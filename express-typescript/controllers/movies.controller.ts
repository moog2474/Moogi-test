import Movies from '../models/movies.model';
import { Request, Response } from 'express';


const getAll = async (req: Request, res: Response) => {

    const { pageSize, searching } = req.body;
    let searching1

    if (searching) {
        searching1 = {
            $or: [
                { title: { $regex: searching } },
                // { plot: { $regex: searching } },
                // { fullplot: { $regex: searching } },
            ],
        };
    } else {
        searching1 = {};
    }


    try {
        const rowCount = await Movies.find(searching1).count();
        const result = await Movies.find(searching1).limit(30).skip(30 * (pageSize - 1));
        if (result) {
            res.json({ status: true, result, totalRows: rowCount });
        } else {
            res.json({ status: false, message: "Rows not found" });
        }
    } catch (err) {
        return res.json({ status: false, message: err })
    }
};

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
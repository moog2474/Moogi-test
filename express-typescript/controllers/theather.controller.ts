import Theather from "../models/theather.model";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) =>{
    try{
        const result = await Theather.find({}).limit(10)
        res.json({status: true, result})
    }
    catch(err){
        res.json({status: false, message: err})
    }
}

const getOne =async (req:Request, res: Response) => {
    const {_id} = req.params;
    try{
        const result = await Theather.findById({_id})
        res.json({status: true, result})
    }
    catch(err){
        res.json({status: false, message: err})
    }
}

const create = async (req: Request, res: Response) =>{
    try {
        const theather = new Theather(req.body);
        const savedTheather = await theather.save();
        res.json({ status: true, savedTheather })
    } catch (error) {
        res.json({ status: false, message: error })
    }
}

const deleteTheather = async ( req: Request, res: Response) =>{
    const {_id }= req.params
    try{
        const result = await Theather.findByIdAndDelete({_id})
        res.json({status: true, result}) 
    }
    catch(err){
        res.json({status: false, message: err})
    }
}

const updateTheather = async (req: Request, res: Response) =>{
    const {_id} = req.params
    try{
        const result = await Theather.findByIdAndUpdate({_id}, req.body)
        res.json({status: true, result})
    }
    catch(err){
        res.json({status: false, message: err})
    }
}





export {getAll, getOne, create, deleteTheather, updateTheather}
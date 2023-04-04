import React from 'react'
import axios from "axios";
import { MovieCard } from './MovieCard';

interface Movie{
    _id: string;
    title: string;
    poster: string;
    plot: string;
    
}



export const Movie = () => {
  return (
    <div>Movie</div>
  )
}

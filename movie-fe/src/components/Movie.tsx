import React, { useEffect, useState } from 'react'
import axios from "axios";
import { MovieCard } from './MovieCard';
import { IMovie } from './IMovie';


const Movie = (): JSX.Element => {

  const [movies, setMovies] = useState<[IMovie]>();

  const getData = () =>{
    axios
    .post("http://localhost:8080/api/movie", {pageSize: 1, limit: 10})
    .then((res)=> setMovies(res.data.result));
  };

  useEffect(()=>{
    getData()
  }, []);

  return (
    <>
    <div className="flex justify-between py-5">
      <h6>Movies</h6>
    </div>
    <div className="flex justify-between flex-wrap">
      {movies?.map((item, index) => {
        return <MovieCard item={item} key={index} />;
      })}
    </div>
  </>
  )
}

export default Movie;
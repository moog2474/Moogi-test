import React, { useEffect, useState } from 'react'
import axios from "axios";
import { MovieCard } from './MovieCard';

interface IMovie {
  _id: string;
  title: string;
  poster: string;
  plot: string;
  imdb: {
    rating: number;
    votes: number
  }
}


export const Movie = () => {

  const [movies, setMovies] = useState<Array<IMovie>>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/movie")
      .then((res) => {
        setMovies(res.data.result)
      })
      .catch((err) => console.log(err))
  };

  return (
    <div>
      <h2>Movies</h2>
      <div className='flex flex-row flex-wrap'>
        {movies.map((item, index) => {
          return <MovieCard key={index} item={item} />
        })
        }
      </div>
    </div>
  )
}

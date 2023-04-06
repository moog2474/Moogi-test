import React, { useEffect, useState } from 'react'
import axios from "axios";
import { MovieCard } from './MovieCard';

export interface IMovie {
  _id: string;
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  countries: [string];
  released: string;
  directors: [string];
  writers: [string];
  awards: {
      wins: number;
      nominations: number;
      text: string
  };
  lastupdated: string;
  type: string;
  imdb: {
      rating: number;
      votes: number;
      id: number
  }
  year: number;
  tomatoes: {
      viewer: {
          rating: number;
          numReviews: number;
          meter: number
      };
      fresh: number;
      critic: {
          rating: number;
          numReviews: number;
          meter: number
      }
      rotten: number;
      lastUPdated: number
  };
  theaterId: {
    type: number;
  }
}


const Movie = ({movie}: {movie: Array<IMovie>}): JSX.Element => {

  // const [movies, setMovies] = useState<Array<IMovie>>([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   axios
  //     .get("http://localhost:9000/api/movie")
  //     .then((res) => {
  //       setMovies(res.data.result)
  //     })
  //     .catch((err) => console.log(err))
  // };

  return (
    <>
    <div className="flex justify-between py-5">
      <h6>View All</h6>
    </div>
    <div className="flex justify-between flex-wrap">
      {movie?.map((item, index) => {
        return <MovieCard item={item} key={index} />;
      })}
    </div>
  </>
  )
}

export default Movie;
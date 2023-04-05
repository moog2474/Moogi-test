import React from 'react'

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

interface IMovieCardProps {
    key: number;
    item: IMovie;
}

export const MovieCard = ({ item, key }: IMovieCardProps) => {
    return (
        <div className='flex-1 w-50'>
            <img src={item.poster} />
            <h3>{item.title}</h3>
            <p>{item.plot}</p>
        </div>
    )
}

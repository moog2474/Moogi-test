import Link from 'next/link';
import React from 'react'

import { TomatoesMeter } from './Tomatoesmeter';
import { IMovie } from './IMovie'

interface myProps{
    item: IMovie;
    key?: number
}


export const MovieCard = ({ item }: myProps): JSX.Element => {
    const date = new Date(item.released)
    if(item.poster){
    return (
        <div className='w-100 p-4'>
                <img src={item.poster} alt={item.title} className="w-64 h-72 rounded-2xl" />
                <div className='flex justify-start gap-2'>
                <TomatoesMeter
                    criticMeter={item.tomatoes?.critic?.meter}
                    viewerMeter={item.tomatoes?.viewer?.meter}
                />
                </div>
                <Link href={`/movie/${item._id}`}>
                    <h1>{item.title.slice(0,20)}</h1>
                </Link>
                {/* <span>Opens up {date.toLocaleDateString()}</span> */}
        </div>
    )} else{
        return <></>
    }
}

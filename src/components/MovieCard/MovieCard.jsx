import React from 'react'
import { Link } from 'react-router-dom'


export default function MovieCard({movie}) {
    

    return (
    <Link>
       {movie.title}
       {movie.releaseDate}
       <img src={movie.posterPath} />
        {movie.cast}
    </Link>
    )
}

import React from 'react'
import { movies } from '../../data'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function MoviesListPage() {
    

    return (
        <>
            <h1>MoviesListPage</h1>
            {movies.map((movie, idx) => <MovieCard movie={movie} key={idx} index={idx} /> )};
            
        </>
    )
}

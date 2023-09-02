import React from 'react'
import { movies, cast } from '../../data'
import { Link } from 'react-router-dom';
import ActorCard from '../../components/ActorCard/ActorCard';

export default function ActorListPage() {
    const cast = movies.map(i => i.cast).flat();
    const castSet = new Set(cast);
    const castArray = Array.from(castSet);
    return (
        <>
    <h1>Actor List Page</h1>
    {castArray.map((actor, idx) => <ActorCard actor={actor} key={idx}  /> )};
    
        </>
    )
}

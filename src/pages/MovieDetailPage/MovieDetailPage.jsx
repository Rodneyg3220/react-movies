import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function MovieDetailPage() {
    
    const {movieName} = useParams()

    return (
        <>
          <Link to="">Movie Details</Link>
        </>
    )
}

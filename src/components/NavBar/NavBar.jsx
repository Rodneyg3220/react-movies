import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
    

    return (
        <nav>
        <Link class="link" to="/movies">
          Movies
        </Link>
        &nbsp; | &nbsp;
        <Link class="link" to="/actors">
          {" "}
          Actors{" "}
        </Link>
        &nbsp; | &nbsp;
        <span class="hello"> Hello {user} </span>
      </nav>
    );
  }


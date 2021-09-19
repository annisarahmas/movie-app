import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MovieList = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [poster, setPoster] = useState('');

    const handleShowDialog = (url) => {
        setIsOpen(!isOpen);
        setPoster(url);
      };
    return (
        <div className="container">
            {props.movies?.map((movie, idx) =>
                <div className="movie-item-wrapper" key={idx}>
                    <div className="movie-item">
                        <img src={movie.Poster} alt="movie poster" onClick={() => handleShowDialog(movie.Poster)} />
                        {isOpen && (
                            <div className="overlay">
                                <dialog className="dialog" open>
                                    <img src={poster} alt="movie poster" onClick={() => handleShowDialog()} />
                                </dialog>
                            </div>
                        )}
                    </div>
                    <ul className="detail-info">
                        <li>
                            <NavLink to={`/${movie.Title}/detail`} className="title">{movie.Title}</NavLink>
                        </li>
                        <li><span>Year</span>: {movie.Year}</li>
                        <li><span>Genres</span>: {movie.Type}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MovieList;
import React, { useState, useEffect } from "react";
import logoIMDB from '../assets/imdb-logo.svg';
import { getMovieDetail } from '../utils/globalAPI';

const MovieDetail = () => {
    const [detail, setDetail] = useState({});

    const fetchDetail = () => {
        const path = window.location.pathname;
        const title = path.split('/')[1];

        getMovieDetail(title).then((response) => {
            setDetail(response);
        })
    }

    useEffect(() => {
        fetchDetail();
    }, [])

    return (
        <div className="container">
            <div>
                <ul class="breadcrumb">
                    <li><a href="/">Movies</a></li>
                    <li>Detail</li>
                    <li>{detail.Title}</li>
                </ul>
            </div>
            <div className="row detail-movie">
                <div className="col-3">
                    <img src={detail.Poster} alt="movie poster" />
                </div>
                <div className="col">
                    <h3 className="title">{detail.Title}</h3>
                    <p>({detail.Year}) - {detail.Rated} - {detail.Runtime}</p>

                    <ul className="info">
                        <li><span>Director</span>: {detail.Director}</li>
                        <li><span>Writer</span>: {detail.Writer}</li>
                        <li><span>Actors</span>: {detail.Actors}</li>
                        <li><span>Genres</span>: {detail.Genre}</li>
                        <li><span>Production</span>: {detail.Production}</li>
                    </ul>

                    <div className="row align-items-center detail-imdb">
                        <div className="col-2 logo-imdb">
                            <img src={logoIMDB} alt="IMDB Logo" />
                        </div>
                        <div className="col">
                            <div>Rating {detail.imdbRating}</div>
                            <div>Votes {detail.imdbVotes}</div>
                        </div>
                    </div>

                    <p className="description">
                        Synopsis : <br /> {detail.Plot}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
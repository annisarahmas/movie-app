import axios from 'axios';

export function getMovieList(search) {
    const params = search === '' ? 'all' : search;
    const url = `http://www.omdbapi.com/?s=${params}&apikey=faf7e5bb`;
    return axios
        .get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response?.data || {};
        });
}

export function getMovieDetail(params) {
    const url = `http://www.omdbapi.com/?t=${params}&apikey=faf7e5bb`;
    return axios
        .get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response?.data || {};
        });
}
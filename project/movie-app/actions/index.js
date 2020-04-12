
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
const MOVIE_DATA = []

const CATEGORY_DATA = [
    { id: "1", name: 'drama' },
    { id: "2", name: 'action' },
    { id: "3", name: 'adventure' },
    { id: "4", name: 'historical' },
]

// 1. getCategories function
// 2. getCategories in index page
// 3. provide categoris to sidemenu
// 4. in sidemenu iterate categories and display them

export const getCategories = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(CATEGORY_DATA)
            // reject('cannot fetch data!')
        }, 500)
    })
}

export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data)
}

export const getMovieById = (id) => {

    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}
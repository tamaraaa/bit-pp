import { Show } from '../app/movies/Show'

export const fetchService = () => {
    return fetch('http://api.tvmaze.com/shows')
        .then((response) => {
            return response.json()
        })
        .then(shows => {
            const myShows = shows.slice(0,50);
    return myShows.map(show => new Show(show));
        })
}

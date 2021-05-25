import React, { useState, useEffect } from 'react'; 
import axios from '../axios';
import './Row.css'
const baseImgUrl = "https://image.tmdb.org/t/p/original"; 

function Row({ title, fetchUrl, isLargeRow  }) {
    const [movies, setMovies] = useState([]); 
    useEffect( () => { //I need to run one piece of code when this component loads; 
        async function fetchData () {
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results); //Movie array
            return request; 
        }
        fetchData(); 
    }, [fetchUrl]); //run once when the road loads, and don't do it again. If we add movies, that dependency will make the code runs every time it changes.
        //Everytime this runs, it will change when the fetchUrl changes. THIS USE EFFECT IS DEPENDING OF FETCHURL CHANGES. 
        //We have to say to useEffect we are using a variable outside the block, knows that something changes. 
        console.table(movies)
    return (
        <div className= "row">
            <h2>{title}</h2>
            <div className= "row_posters">
                {movies && movies.map(movie => (
                    <img 
                    key = {movie.id}
                    className= {`row_poster ${isLargeRow && "row_posterLarge"}` }
                    src={`${baseImgUrl}${ isLargeRow ?  movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row; 


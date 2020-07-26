import React, { useState, useEffect } from 'react';
import axios from './axios'
import './Row.css'
const baseImageUrl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // A snipet of code which runs based on a specific condtion /variable
    useEffect(() => {
        //if [], run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        
        fetchData();
    }, [fetchUrl]);
    
    console.table(movies);
    return (
        <div className = "row">
            {/** TITLE*/}
            <h2>{title}</h2>

            <div className = "row__posters ">
            {/** SEVERAL ROW POSTERS */}
            {movies.map(movie =>(
                <img
                    className = "row__poster" 
                    src = {`${baseImageUrl}${movie.poster_path}`} alt = {movie.name}
                />
                ))}
            </div>
                    {/** CONTAINER ->  POSTERS*/}
        </div>
    );
}

export default Row;
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Styles/Row.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"
const baseImageUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
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
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
    const handleClick = movie =>{
        if (trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams =  new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className = "row">
            {/** TITLE*/}
            <h2>{title}</h2>

            <div className = "row__posters ">
            {/** SEVERAL ROW POSTERS */}
            {movies.map(movie =>(
                <img
                    key = {movie.id} 
                    onClick ={() => { handleClick(movie)}}
                    className = {`row__poster ${isLargeRow && "row__posterLarge"} `}
                    src = {`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}
                />
                ))}
            </div>
            {trailerUrl &&<Youtube videoId = {trailerUrl} opts = {opts} />}
        </div>
    );
}

export default Row;
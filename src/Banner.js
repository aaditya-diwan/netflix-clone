
import React, {useState, useEffect} from 'react';

function Banner(props) {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            

        }
        fetchData();
    }, [])

    return (
        <header> {/**BACKGORUND IMAGE */}
        {/** TITLE */}
        {/**div -> 2 Buttons  */}
        {/** Description */}
    </header>
    );
}

export default Banner;
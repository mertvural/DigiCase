import React, { useContext, useEffect, useState } from 'react';
import { FilmContext } from "../index"
import { useLocation } from 'react-router-dom';


const Detail = () => {


    const filmDatas = useContext(FilmContext),

        location = useLocation(),

        getID = location.pathname.split("id=")[1],

        getFilm = filmDatas.filter(x => x.imdbID === getID);

    const { imdbID } = { ...getFilm[0] };

    const [state, setstate] = useState([])


    useEffect(() => {
        async function fetchDatas() {
            const response = await fetch(
                `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=e405d9ae` //Plot(description) u getirmem için tekrar apiye istek atmam gerekti. cunku api id ye göre Plot getiriyor yoksa buna gerek yoktu.
            );
            const datas = await response.json(response);

            setstate(datas)

        }
        fetchDatas();
    }, [imdbID]);


    return (

        <div className="detail">
            <img src={state.Poster} className="detail__banner" alt={state.Title} />

            <div className="container">

                <div className="detail__box">
   
                    <img src={state.Poster} alt={state.Title} />

                    <h1>{state.Title}</h1>
                    
                    <p>{state.Actors} - {state.Year}</p>

                    <small>
                       imdbRating:{state.imdbRating}
                    </small>
                    <p>
                        <i>{state.Genre}</i>
                    </p>
                    <p>{state.Plot}</p>

                </div>

            </div>
        </div>
    )
}

export default Detail

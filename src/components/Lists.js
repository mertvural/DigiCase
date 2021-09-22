import React, { useEffect, useState, useContext } from 'react';
import List from "./List";
import Slider from "react-slick";
import {FilmContext} from "../index"
const Lists = () => {

  const [state, setstate] = useState([])

  const filmDatas = useContext(FilmContext);

  const settings = {
    dots: true,
    arrows:false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
};

  useEffect(() => {
    async function fetchDatas() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=football&apikey=e405d9ae`
      );
      const datas = await response.json(response);
      setstate(datas.Search);
      filmDatas.push(...datas.Search);
    }
    fetchDatas();
  }, [filmDatas]);

  return (
    <section>
      <div className="container">
        <div className="films">
          <Slider {...settings}>
            {
              state.map(list => (
                <List {...list} key={list.imdbID} />             
              ))
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Lists

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"
import banner3 from "../images/banner3.jpg"

const Banner = () => {

    const settings = {
        dots: true,
        arrows:false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="banner">
            <Slider {...settings}>
                <div className="banner__item">
                    <div className="banner__item--texts">
                      <h2>Lorem Ipsum</h2>
                      <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                      </p>
                    </div>
                    <img className="banner__item--image" src={banner1} alt="banner" />
                </div>
                <div className="banner__item">
                    <div className="banner__item--texts">
                      <h2>Why do we use it?</h2>
                      <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </p>
                    </div>
                    <img className="banner__item--image" src={banner2} alt="banner" />
                </div>
                <div className="banner__item">
                    <div className="banner__item--texts">
                      <h2>Where can I get some?</h2>
                      <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                      </p>
                    </div>
                    <img className="banner__item--image" src={banner3} alt="banner" />
                </div>
            </Slider>
        </section>
    )
}

export default Banner

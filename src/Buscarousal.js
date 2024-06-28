import React, { Component } from "react";
import Slider from "react-slick";
import "./Buscarousal.css"

export default class Buscarousal extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="buscarousal-container">
           <div className="buscarousal-container-1">
           <Slider {...settings}>
          <div className="buscarousal-img">
             <img src="../image/busticket1.png"alt="loading"/>
          </div>
          <div className="buscarousal-img">
          <img src="../image/busticket2.png" alt="loading"/>
          </div>
          <div className="buscarousal-img">
          <img src="../image/busticket3.png" alt="loading"/>
          </div>
          <div className="buscarousal-img">
          <img src="../image/busticket4.png" alt="loading"/>
          </div>
          <div className="buscarousal-img">
          <img src="../image/busticket5.png" alt="loading"/>
          </div>
          <div className="buscarousal-img">
          <img src="../image/busticket6.png" alt="loading"/>
          </div>
          <div className="buscarousal-img">
          <img src="../image/busticket7.png" alt="loading"/>
          </div>
        </Slider>
            </div> 
        </div>
       
      </div>
    );
  }
}
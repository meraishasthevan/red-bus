import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Primosection from './Primosection.js';
import React, { Component } from "react";
import Slider from "react-slick";
import "./carousal.css"
export default class Carousal extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
      <div >
        <div className="carosal-container">
            <div className="carosal-slide">
            <h1>TRENDING OFFERS</h1>
        <Slider {...settings}>
          <div >
            <div className="curosal">
            <div className="curosal-img">
                <img src="image/caurosal1.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save up to Rs 250 on bus </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>FIRST</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
            
          </div>
          <div>
          <div className="curosal2">
            <div className="curosal-img">
                <img src="image/caurosal2.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save up to Rs 300 on AP</h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>SUPERHIT</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
          </div>
          <div>
          <div className="curosal3">
            <div className="curosal-img">
                <img src="image/caurosal3.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Max 20% off up to Rs 300 </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>BUS300</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
          </div>
          </div>
          <div>
          <div className="curosal2">
            <div className="curosal-img">
                <img src="image/caurosal4.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save up to Rs 200 in kerala </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>FIRST</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
          </div>
          <div>
          <div className="curosal4">
            <div className="curosal-img">
                <img src="image/caurosal5.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save up to Rs 300  </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>CHARTERED15</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
          </div>
          <div>
          <div className="curosal5">
            <div className="curosal-img">
                <img src="image/caurosal6.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save up to Rs 250 </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>APSRTCNEW</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
          </div>
          <div>
          <div className="curosal6">
            <div className="curosal-img">
                <img src="image/caurosal7.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save Up to Rs 250 </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>FIRST</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
          </div>
          <div>
          <div className="curosal7">
            <div className="curosal-img">
                <img src="image/caurosal8.png" alt=""/>
            </div>
            <div className="curosal-detail">
                <div className="curosal-btn">
                    <button>Bus</button>
                </div>
                <h3>Save up to Rs 250 </h3>
                <p>Valid till 31 Jan</p>
                <div className="curosal-btn1">
                    <button>UPSRTC</button>
                    <img src="image/copy.svg" alt=""/>
                </div>
            </div>
            </div>
          </div>
        </Slider>
            </div>
        </div>
        <Primosection/>
      </div>
    );
  }
}
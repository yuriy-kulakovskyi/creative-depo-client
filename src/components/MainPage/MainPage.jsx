import { useState, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import nextSvg from "./images/next.svg"
import prevSvg from "./images/previous.svg"
import "./MainPage.css"

register();
const slidesData = [
    {
        id: 1,
        image: "./MainPage/slide1.webp",
        imageForPhones: "./MainPage/slide1-phone.webp"
    },
    {
        id: 2,
        image: "./MainPage/slide2.webp",
        imageForPhones: "./MainPage/slide2-phone.webp"
    },
    {
        id: 3,
        image: "./MainPage/slide3.webp",
        imageForPhones: "./MainPage/slide3-phone.webp"
    },
    {
        id: 4,
        image: "./MainPage/slide4.webp",
        imageForPhones: "./MainPage/slide4-phone.webp"
    },
]

function MainPage() {
    let [needToRz, setNeedToRz] = useState(!(window.innerWidth >= 800))
    useEffect(()=>{
        window.addEventListener("resize", function(){
            setNeedToRz(!(window.innerWidth >= 800))
        })
    }, [])
    return (
        <section className="MainPage">
            <div className="MainPage-slider-container">
                <swiper-container
                    effect="fade"
                    simulate-touch="false"
                    autoplay-delay="5000"
                    direction="horizontal"
                    slides-per-view="1"
                    speed="500"
                    loop="true"
                    navigation="true"
                    navigation-next-el=".MainPage-slider-btn-next"
                    navigation-prev-el=".MainPage-slider-btn-previous"
                    pagination-el=".MainPage-slider-pagination"
                    pagination-bullet-element="span"
                    pagination-bullet-class="MainPage-slider-pagination-bullet"
                    pagination-bullet-active-class="MainPage-slider-pagination-bullet-active"
                    pagination-bullet-current-class="MainPage-slider-pagination-bullet"
                    pagination-clickable="true"
                >
                    <div className="MainPage-slider-pagination">
                        <span className="MainPage-slider-pagination-bullet-active"></span>
                        <span className="MainPage-slider-pagination-bullet"></span>
                    </div>
                    <div className="MainPage-slider-btn MainPage-slider-btn-previous">
                        <img className="MainPage-slider-btn-svg" src={prevSvg} alt="previous slide button" />
                    </div>
                    {
                        function(){
                            if (window.innerWidth >= 800) {
                                return slidesData.map(item =>
                                    <swiper-slide key={item.id}>
                                        <div className="MainPage-slide-inner">
                                            <img src={item.image} alt={`Slide${item.id}`} />
                                        </div>
                                    </swiper-slide>
                                )
                            } else {
                                return slidesData.map(item =>
                                    <swiper-slide key={item.id}>
                                        <div className="MainPage-slide-inner">
                                            <img src={item.imageForPhones} alt={`Slide${item.id}`} />
                                        </div>
                                    </swiper-slide>
                                )
                            }
                        }()
                    }
                    <div className="MainPage-slider-btn MainPage-slider-btn-next">
                        <img className="MainPage-slider-btn-svg" src={nextSvg} alt="next slide button" />
                    </div>
                </swiper-container>
            </div>
        </section>
    )
}

export default MainPage;
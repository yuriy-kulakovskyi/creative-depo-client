import { useState, useEffect, useCallback } from 'react';
import { register } from 'swiper/element/bundle';

import nextSvg from "./images/next.svg"
import prevSvg from "./images/previous.svg"
import slidesData from "./slides.json"
import "./MainPage.css"

register();

function MainPage() {
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let setAdaptivityImage = useCallback((item) => (screenWidth >= 800) ? item.image : item.imageForPhones, [screenWidth])
    useEffect(() => {
        let callback = () => setScreenWidth(window.innerWidth)
        window.addEventListener("resize", callback)
        return () => {
            window.removeEventListener("resize", callback)
        }
    }, [])

    let moveTo = useCallback(function (selector) {
        if (selector) {
            let element = document.querySelector(selector);
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
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
                        <span className="MainPage-slider-pagination-bullet-active"></span><span className="MainPage-slider-pagination-bullet"></span>
                    </div>
                    <div className="MainPage-slider-btn MainPage-slider-btn-previous">
                        <img className="MainPage-slider-btn-svg" src={prevSvg} alt="previous slide button" />
                    </div>
                    {
                        slidesData.map(item =>
                            <swiper-slide key={item.id}>
                                <div className="MainPage-slide-inner">
                                    <button className="MainPage-slideBtn" onClick={() => moveTo(`${item.action}`)}>
                                        <img src={setAdaptivityImage(item)} alt={`Slide${item.id}`} />
                                    </button>
                                </div>
                            </swiper-slide>
                        )
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
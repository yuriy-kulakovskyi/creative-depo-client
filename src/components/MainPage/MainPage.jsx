import { register } from 'swiper/element/bundle';

import nextSvg from "./images/next.svg"
import prevSvg from "./images/previous.svg"
import "./MainPage.css"

register();
const slidesData = [
    {
        id: 1,
        image: "./MainPage/slide1.webp"
    },
    {
        id: 2,
        image: "./MainPage/slide2.webp"
    },
    {
        id: 3,
        image: "./MainPage/slide3.webp"
    },
    {
        id: 4,
        image: "./MainPage/slide4.webp"
    },
]

function MainPage() {
    return (
        <section className="MainPage">
            <div className="MainPage-slider-container">
                <swiper-container
                    effect="fade"
                    simulate-touch="false"
                    autoplay-delay="5000"
                    direction="horizontal"
                    navigation="true"
                    pagination="true"
                    slides-per-view="1"
                    speed="500"
                    loop="true"
                    navigation-next-el=".MainPage-slider-btn-next"
                    navigation-prev-el=".MainPage-slider-btn-previous">
                        <div className="MainPage-slider-btn MainPage-slider-btn-previous">
                            <img className="MainPage-slider-btn-svg" src={prevSvg} alt="previous slide button" />
                        </div>
                        {
                            slidesData.map(item =>
                                <swiper-slide key={item.id}>
                                    <div className="MainPage-slide-inner">
                                        <img src={item.image} alt={`Slide${item.id}`} />
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

export default MainPage
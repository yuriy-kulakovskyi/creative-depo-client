import { register } from 'swiper/element/bundle';

import "./HelpSlider.css"
import sliderData from "./slides.json"
import prevSvg from "./images/previous.svg"
import nextSvg from "./images/next.svg"

register();

function HelpSlider() {
    return (
        <section className="HelpSlider" id='HelpSlider'>
            <div className="HelpSlider-container">
                <swiper-container
                    effect="slide"
                    slides-per-view="1.6"
                    space-between="25"
                    centered-slides="true"
                    simulate-touch="false"
                    autoplay-delay="5000"
                    direction="horizontal"
                    speed="500"
                    loop="true"
                    navigation="true"
                    pagination="true"
                    navigation-next-el=".HelpSlider-slider-btn-next"
                    navigation-prev-el=".HelpSlider-slider-btn-previous"
                    pagination-el=".HelpSlider-slider-pagination"
                    pagination-bullet-element="span"
                    pagination-bullet-class="HelpSlider-slider-pagination-bullet"
                    pagination-bullet-active-class="HelpSlider-slider-pagination-bullet-active"
                    pagination-bullet-current-class="HelpSlider-slider-pagination-bullet"
                    pagination-clickable="true"
                >
                    {
                        sliderData.map(item =>
                            <swiper-slide key={item.id}>
                                <div className="HelpSlider-slide-inner">
                                    <img className="HelpSlider-slide-image" src={item.image} alt={`Slide${item.id}`} />
                                </div>
                            </swiper-slide>
                        )
                    }
                </swiper-container>
                <div className="HelpSlider-slider-pagination">
                    <span className="HelpSlider-slider-pagination-bullet-active"></span><span className="HelpSlider-slider-pagination-bullet"></span>
                </div>
                <div className="HelpSlider-slider-btn HelpSlider-slider-btn-previous">
                    <img className="HelpSlider-slider-btn-svg" src={prevSvg} alt="previous slide button" />
                </div>
                <div className="HelpSlider-slider-btn HelpSlider-slider-btn-next">
                    <img className="HelpSlider-slider-btn-svg" src={nextSvg} alt="next slide button" />
                </div>
            </div>
        </section>
    )
}

export default HelpSlider
import { register } from 'swiper/element/bundle';

import "./HelpSliderPopup.css"
import sliderData from "../HelpSlider/slides.json"
import closeIcon from "./images/close.svg"
import nextIcon from "./images/next.svg"
import prevIcon from "./images/prev.svg"

register()
function HelpSliderPopup(props) {
    return (
        <div data-hidden={props.hidden} className="HelpSliderPopup">
            <div className="HelpSliderPopup-controlls">
                <button onClick={()=>props.hideCallback()} className="HelpSliderPopup-button"><img src={closeIcon} alt="close button" /></button>
            </div>
            <div className="HelpSliderPopup-container">
                <div className="HelpSliderPopup-slider-nav">
                    <div className="HelpSliderPopup-slider-btn HelpSliderPopup-slider-btn-next">
                        <img src={nextIcon} alt="next slide" />
                    </div>
                    <div className="HelpSliderPopup-slider-btn HelpSliderPopup-slider-btn-previous">
                        <img src={prevIcon} alt="previous slide" />
                    </div>
                </div>
                <swiper-container
                    effect="slide"
                    slides-per-view="1"
                    direction="horizontal"
                    speed="500"
                    loop="true"
                    navigation="true"
                    navigation-next-el=".HelpSliderPopup-slider-btn-next"
                    navigation-prev-el=".HelpSliderPopup-slider-btn-previous"
                    zoom-max-ratio="2"
                    zoom-container-class="HelpSliderPopup-zoomable"
                    zoom-toggle="true"
                    zoom-zoomed-slide-class="HelpSliderPopup-zoomable-zoomed"
                >
                    {
                        sliderData.map(item =>
                            <swiper-slide lazy="true" key={item.id}>
                                <div className="HelpSliderPopup-content">
                                    <div className="HelpSliderPopup-zoomable">
                                        <img loading="lazy" src={item.image} alt="slider item" />
                                    </div>
                                </div>
                            </swiper-slide>
                        )
                    }
                </swiper-container>
            </div>
        </div>
    )
}

export default HelpSliderPopup
import { register } from 'swiper/element/bundle';

import "./HelpSliderPopup.css"

register()
function HelpSliderPopup (props) {
    return (
        <div className="HelpSliderPopup">
            This popup will be shown when user clicks image on slider (in development!)
        </div>
    )
}

export default HelpSliderPopup
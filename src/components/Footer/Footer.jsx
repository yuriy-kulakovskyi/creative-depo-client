import './Footer.css';

import insta from './FooterImage/instagram.png';
import telegram from "./FooterImage/telegram.png";
import viber from "./FooterImage/viber.png";


function Footer() {
    return (
        <footer className='Footer'>
            <span className='Footer__text'>Зв'яжіться з нами</span>

            <span className='Footer__email'>creativedepo.ua@gmail.com</span>

            <div className="Footer__socialContainer">

                <img src={insta} alt="" className='Social' />

                <div className="SocialTelegram">
                    <div className="telegram__img">
                        <img src={telegram} alt="" className='telegramImage' />



                    </div>
                    <p className='telegram__text'>CREATIVE.DEPO</p>

                </div>
                <div className="SocialViber">
                    <div className="viber__img">
                        <img src={viber} alt="" className='viberImage' />



                    </div>
                    <p className='viber__text'>CREATIVE.DEPO</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
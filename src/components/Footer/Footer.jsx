import './Footer.css';

import insta from './FooterImage/instagram.png';
import telegram from "./FooterImage/telegram.png";
import viber from "./FooterImage/viber.png";
import applepay from "./FooterImage/applepay.png";
import privat from './FooterImage/privat.png'
import mastercard from './FooterImage/mastercard.png';
import visa from "./FooterImage/visa.png"



function Footer() {
    return (
        <footer className='Footer' id='Footer'>
            <div className="Footer__container">
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

                <div className="Footer__links">
                    <a href="" className='Footer__a'>КАТЕГОРІЇ</a>
                    <a href="#HelpPage" className='Footer__a'>ЗСУ</a>
                    <a href="" className='Footer__a'>ОПТ</a>
                    <a href="#Footer" className='Footer__a'>КОНТАКТИ</a>
                </div>

                <div className="Footer__about">
                    <div className="Footer__about__block">
                        <p className='about__block__h1'>ПРО CREATIVE.DEPO</p>
                        <div className="about__block__cont">
                            <a href="" className='about__block__a'>про нас</a>
                            <br />
                            <a href="" className='about__block__a'>умови використання</a>
                        </div>
                    </div>
                    <div className="Footer__about__block">
                        <p className='about__block__h1'>ПОКУПЦЯМ</p>
                        <div className="about__block__cont">
                            <a href="" className='about__block__a'>доставка та оплата</a>
                            <br />
                            <a href="" className='about__block__a'>повернення та обмін</a>
                        </div>

                    </div>
                    <div className="Footer__about__block">
                        <p className='about__block__h1'>СПОСОБИ ОПЛАТИ</p>
                        <div className="about__ImageCont">
                            <div className="about__ImageConat__one">

                                <div className="aboutImage">
                                    <img src={visa} alt="" className='about__img' />
                                </div>
                                <div className="aboutImage">
                                    <img src={mastercard} alt="" className='about__img' />

                                </div>
                            </div>

                            <div className="about__ImageConat__one">

                                <div className="aboutImage">
                                    <img src={privat} alt="" className='about__img' />
                                </div>
                                <div className="aboutImage">
                                    <img src={applepay} alt="" className='about__img' />
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;
import './HelpPage.css';

import HelpImage from './HelpPageImages/HelpImage1.jpg'



function HelpPage() {
    return (
        <section className='HelpPage' id='HelpPage'>

            <div className="HelpPage__Container">
                <div className="HelpPage__cont__block">
                    <div className="cont__block__one">
                        <span className='HelpPage__span'>Як саме ти допомогаєш</span>
                        <br />
                        <span className='HelpPage__span'>Україні, купуючи мерч:</span>

                    </div>
                    <div className="cont__block__two">
                        <div className="blue__line"></div>
                        <p className='HelpPage__two__text'>Частину прибутку витрачаємо <br />
                            на потреби ЗСУ</p>


                    </div>
                    <div className="cont__block__three">
                        <div className="yelow__line"></div>
                        <div className="block__three__container">
                            <div className="three__cont__one">
                                <p className='cont__one__text'> Нижче є фото бронежилетів, які були виготовлені <br />
                                    завдяки вашим замовленням.</p>
                            </div>
                            <div className="three__cont__two">
                                <p className='cont__two__text'>Плити 4 класу, покриті протисколковим та <br />
                                    демпферним покриттям. Плитоноска важить 1,5 кг + <br />
                                    2 плити по 3кг, загалом — 7,5 кг, шо є досить <br />
                                    комфортним для тривалого використання <br />
                                    військовими.</p>

                            </div>

                        </div>



                    </div>

                </div>


                <img src={HelpImage} alt="" className='HelpIMage' />


            </div>



        </section>
    )

}
export default HelpPage;
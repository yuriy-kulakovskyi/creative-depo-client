import './HelpPage.css';

import HelpImage from './HelpPageImages/HelpImage1.jpg'



function HelpPage() {
    return (
        <section className='HelpPage'>

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



                    </div>

                </div>


                <img src={HelpImage} alt="" />

            </div>



        </section>
    )

}
export default HelpPage;
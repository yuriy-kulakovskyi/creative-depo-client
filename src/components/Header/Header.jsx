import { useState } from 'react';
import './Header.css'
function Header(){
let [scrollColor,setScrollColor]=useState('rgb(19, 19, 19,0)')
let howmuchIsScroll=0
// function getHome(){    
    
//     window.scrollTo(0,0)
// }
//     function getKataloh(){    
//         let height= document.getElementById('idSection1').offsetHeight;
//         window.scrollTo(0,height)
//     }



   setInterval(function(){
    howmuchIsScroll=(window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    (howmuchIsScroll<=50) ? setScrollColor('rgb(19, 19, 19,0)') :setScrollColor('rgb(19, 19, 19,0.8)')

   },1000)

    return(
        <header  className='header' style={{backgroundColor:scrollColor}}>
            <div className="header__logo"  >
                <div className="header__logo__letters">CD</div>
                <div className="header__logo__text">Creative <br /> depo</div>
            </div>
            <div className="header__right">
                <div className="header__right__el">КАТАЛОГ</div>
                <div className="header__right__el">ЗСУ</div>
                <div className="header__right__el">ОПТ</div>
                <div className="header__right__el">КОНТАКТИ</div>
            </div>
        </header>
    )
}
export default Header
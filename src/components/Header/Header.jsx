import {  useState } from 'react';
import './Header.css'

function Header(){
let [scrollColor,setScrollColor]=useState('rgb(19, 19, 19,0)')
let howmuchIsScroll=0
let [clikedBurger,setClikedBurger]=useState(true)


// function getHome(){    
    
//     window.scrollTo(0,0)
// }
//     function getKataloh(){    
//         let height= document.getElementById('idSection1').offsetHeight;
//         window.scrollTo(0,height)
//     }
function clickBurger(){
    setClikedBurger(!clikedBurger)
}

// useEffect(()=>{
       
//     ((window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop<=50) ? setScrollColor('rgb(19, 19, 19,0)') :setScrollColor('rgb(19, 19, 19,0.8)')
//     if(window.innerWidth<=800){
//         setScrollColor('rgb(19, 19, 19,0.8)')
//     }
// },[])

   setInterval(function(){
    howmuchIsScroll=(window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    (howmuchIsScroll<=50 && window.innerWidth>=900) ? setScrollColor('rgb(19, 19, 19,0)') :setScrollColor('rgb(19, 19, 19,0.8)')
    // if(window.innerWidth<=800){
    //     console.log()
    //     setScrollColor('rgb(19, 19, 19,0.8)')
    // }
   },1000)

    return(
        <header  className='header' style={{backgroundColor:scrollColor}}>
            <div className="header__logo"  >
                <div className="header__logo__letters">CD</div>
                <div className="header__logo__text">Creative depo</div>
            </div>
            <div className="header__right">
                <div className="header__right__el">КАТАЛОГ</div>
                <div className="header__right__el">ЗСУ</div>
                <div className="header__right__el">ОПТ</div>
                <div className="header__right__el">КОНТАКТИ</div>
            </div>
            <div className='headerBurger' onClick={clickBurger} style={{justifyContent:(clikedBurger) ? 'space-between' :'center'}}>
           
                <div className={clikedBurger ? "headerBurger__row":"headerBurger__row__rotateRight"}></div>
                <div className={clikedBurger ? "headerBurger__row":null}></div>
                <div className={clikedBurger ? "headerBurger__row":"headerBurger__row__rotateLeft"}></div>
        </div>
        </header>
    )
}
export default Header
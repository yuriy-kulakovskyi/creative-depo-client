import {  useState } from 'react';
import './Header.css'


function Header(props){
let [scrollColor,setScrollColor]=useState('rgb(19, 19, 19,0)')
let howmuchIsScroll=0



// function getHome(){    
    
//     window.scrollTo(0,0)
// }
//     function getKataloh(){    
//         let height= document.getElementById('idSection1').offsetHeight;
//         window.scrollTo(0,height)
//     }


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
        <div  className='header' id='header' style={{backgroundColor:scrollColor}}>
            <div className="header__logo" onClick={()=>props.getHome(0)}  >
                <div className="header__logo__letters">CD</div>
                <div className="header__logo__text">Creative depo</div>
            </div>
            <div className="header__right">
                <div className="header__right__el" style={{color:(props.whichIsVisible==='CatalogPage') ? '#fb472e':null}}  onClick={()=>props.getCatalogPage()}>КАТАЛОГ</div>
                <div className="header__right__el" style={{color:(props.whichIsVisible==='HelpPage') ? '#fb472e':null}} onClick={()=>props.getHelpPage()}>ЗСУ</div>
                <a rel="noreferrer" target='_blank' href="https://creativedepo.com.ua/opt"><div className="header__right__el">ОПТ</div></a> 
                <div className="header__right__el" style={{color:(props.whichIsVisible==='Footer') ? '#fb472e':null}} onClick={()=>props.getFooterPage()}>КОНТАКТИ</div>
            </div>
            <div className='headerBurger' onClick={()=>props.clickBurgerBtn(0)} style={{justifyContent:(props.clikedBurger) ? 'space-between' :'center'}}>
           
                <div className={props.clikedBurger ? "headerBurger__row":"headerBurger__row__rotateRight"}></div>
                <div className={props.clikedBurger ? "headerBurger__row":null}></div>
                <div className={props.clikedBurger ? "headerBurger__row":"headerBurger__row__rotateLeft"}></div>
        </div>
  
        </div>
   
    )
}
export default Header
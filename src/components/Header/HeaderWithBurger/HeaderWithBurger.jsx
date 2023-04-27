import { useState } from 'react'
import Header from '../Header/Header'
import HeaderBurger from '../HeaderBurger/HeaderBurger'
import './HeaderWithBurger.css'
import HeaderClose from '../HeaderClose/HeaderClose'
function HeaderWithBurger(){
    let [isVisibleBurger,setIsVisibleBurger]=useState(false)
    let [clikedBurger,setClikedBurger]=useState(true)
    // let [whichIsVisible,setWhichIsVisible]=useState('none')
    // let howmuchIsScroll=0
   
    function clickBurgerBtn(val){
        setClikedBurger(!clikedBurger)
        clickBurger()
        
    }
    function clickBurger(){
        setIsVisibleBurger(!isVisibleBurger)

    }
    setInterval(function(){
        if(window.innerWidth>=900){
            setIsVisibleBurger(false) 
            setClikedBurger(true)
        }
        // howmuchIsScroll=(window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        // let height=document.getElementById('MainPage').offsetHeight
        // if(howmuchIsScroll<=height){
        //     setWhichIsVisible('none')
        // }else if(howmuchIsScroll>=document.getElementById('MainPage').offsetHeight &&howmuchIsScroll>=document.getElementById('MainPage').offsetHeight){

        // }
    },1000)
    function getHome(val){    
        window.scrollTo(0,val)
        setIsVisibleBurger(false)
        setClikedBurger(true)
    }
    function getCatalogPage(){
        let height=document.getElementById('MainPage').offsetHeight
        window.scrollTo(0,height)
        setIsVisibleBurger(false)
        setClikedBurger(true)
    }
    function getHelpPage(){
        let height=document.getElementById('MainPage').offsetHeight+document.getElementById('CatalogPage').offsetHeight
        window.scrollTo(0,height)
        setIsVisibleBurger(false)
        setClikedBurger(true)
    }
    function getFooterPage(){
        let height=document.getElementById('MainPage').offsetHeight+document.getElementById('CatalogPage').offsetHeight+document.getElementById('HelpPage').offsetHeight+document.getElementById('HelpSlider').offsetHeight
        window.scrollTo(0,height)
        setIsVisibleBurger(false)
        setClikedBurger(true)
    }
    //id: MainPage CatalogPage HelpPage HelpSlider Footer
    return(
        <header className='headerWithBurger' id='headerWithBurger'>
            <Header getHome={getHome} getCatalogPage={getCatalogPage} getHelpPage={getHelpPage} getFooterPage={getFooterPage} clickBurgerBtn={clickBurgerBtn} clikedBurger={clikedBurger}/>
            <HeaderBurger getHome={getHome} getCatalogPage={getCatalogPage} getHelpPage={getHelpPage} getFooterPage={getFooterPage} isVisibleBurger={isVisibleBurger}/>
            <HeaderClose clickBurgerBtn={clickBurgerBtn} isVisibleBurger={isVisibleBurger}/>
        </header>
    )
}
export default HeaderWithBurger
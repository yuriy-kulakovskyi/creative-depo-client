import { useState } from 'react'
import Header from '../Header/Header'
import HeaderBurger from '../HeaderBurger/HeaderBurger'
import './HeaderWithBurger.css'
import HeaderClose from '../HeaderClose/HeaderClose'
function HeaderWithBurger(){
    let [isVisibleBurger,setIsVisibleBurger]=useState(false)
    let [clikedBurger,setClikedBurger]=useState(true)
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
    },1000)
    function getHome(val){    
        window.scrollTo(0,val)
        setIsVisibleBurger(false)
        setClikedBurger(true)
    }
    return(
        <header className='headerWithBurger' id='headerWithBurger'>
            <Header getHome={getHome}  clickBurgerBtn={clickBurgerBtn} clikedBurger={clikedBurger}/>
            <HeaderBurger getHome={getHome} isVisibleBurger={isVisibleBurger}/>
            <HeaderClose clickBurgerBtn={clickBurgerBtn} isVisibleBurger={isVisibleBurger}/>
        </header>
    )
}
export default HeaderWithBurger
import { useState } from 'react'
import Header from '../Header'
import HeaderBurger from '../HeaderBurger/HeaderBurger'
import './HeaderWithBurger.css'
function HeaderWithBurger(){
    let [isVisibleBurger,setIsVisibleBurger]=useState(false)
    let [clikedBurger,setClikedBurger]=useState(true)
    function clickBurgerBtn(val){
        setClikedBurger(!clikedBurger)
        clickBurger()
        console.log(clikedBurger)
    }
    function clickBurger(){
        setIsVisibleBurger(!isVisibleBurger)
        console.log(isVisibleBurger)
    }
    function getHome(val){    
        window.scrollTo(0,val)
        setIsVisibleBurger(false)
        setClikedBurger(true)
    }
    return(
        <div className='headerWithBurger' id='headerWithBurger'>
            <Header getHome={getHome} clickBurger={clickBurger} clickBurgerBtn={clickBurgerBtn} clikedBurger={clikedBurger}/>
            <HeaderBurger getHome={getHome} isVisibleBurger={isVisibleBurger}/>
            {isVisibleBurger}
        </div>
    )
}
export default HeaderWithBurger
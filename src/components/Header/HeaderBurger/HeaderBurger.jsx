
import './HeaderBurger.css'

function HeaderBurger(props){

    
    return(
        <div className='headerBurgerPoup' id='headerBurgerPoup' style={{minHeight:(props.isVisibleBurger) ? '45vh':'0vh',opacity:(props.isVisibleBurger) ? '1':'0'}}>
              <div className="headerBurgerPoup__logo" onClick={()=>props.getHome(0)}  >
             
                <div className="headerBurgerPoup__logo__letters">CD</div>
                <div className="headerBurgerPoup__logo__text">Creative <br /> depo</div>
            </div>
            <div className="headerBurgerPoup__bottom">
                <div className="headerBurgerPoup__bottom__el" onClick={()=>props.getCatalogPage()}>КАТАЛОГ</div>
                <div className="headerBurgerPoup__bottom__el" onClick={()=>props.getHelpPage()}>ЗСУ</div>
                <a rel="noreferrer" target='_blank' href="https://creativedepo.com.ua/opt"><div className="headerBurgerPoup__bottom__el">ОПТ</div></a> 
                <div className="headerBurgerPoup__bottom__el" onClick={()=>props.getFooterPage()}>КОНТАКТИ</div>
            </div>
        </div>
    )
}
export default HeaderBurger
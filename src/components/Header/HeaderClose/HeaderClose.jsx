import './HeaderClose.css'
function HeaderClose(props){
    return(
        <div className='headerClose' onClick={()=>props.clickBurgerBtn(0)} style={{display:(props.isVisibleBurger) ? 'flex':'none'}}>
            
        </div>
    )
}
export default HeaderClose
import React from "react";
import './NavigationBtn.css';
const NavigationBtn=({isActive, children, onClick})=>{
    if(isActive){
        return(
            <div className="btn__NavigationBtn" style={{backgroundColor:"red", color:"#fff", pointerEvents:"none"}}>{children}</div>
        )
    }
    return(
        <div className="btn__NavigationBtn" onClick={()=>{
            onClick();
        }}>{children}</div>
    )
}
export default NavigationBtn;
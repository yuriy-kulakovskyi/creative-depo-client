import React from "react";
import NavigationBtn from "../NavigationBtn/NavigationBtn";
import './Navigation.css';
const Navigation=({Categories,CategoryClick, selectedCategory})=>{
    return(
        <section className="Navigation">
        {Categories&&Categories.map((categoryName)=>{
          return(
            <NavigationBtn key={categoryName} onClick={()=>CategoryClick(categoryName)} isActive={selectedCategory===categoryName} children={<div className="btn__Navigation">{categoryName}</div>}/>
           )
        })}
        </section>
    )
}
export default Navigation;
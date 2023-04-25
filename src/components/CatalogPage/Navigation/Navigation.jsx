import React from "react";
import './Navigation.css';
import { useState } from "react";
import NavigationBtn from "../NavigationBtn/NavigationBtn";
import AllProducts from "../AllProducts/AllProducts";
import Tshirts from "../Tshirts/Tshirts";
import Hoodies from "../Hoodies/Hoodies";
import Caps from "../Caps/Caps";
import Accessories from "../Accessories/Accessories";
const Navigation=({receivedData})=>{
    const [tab, setTab] = useState('all');
    return(
        <>
        <section className="Navigation">
            <NavigationBtn isActive={tab === 'all'} onClick={() => setTab('all')} children={<><div className='children__NavigationBtn'>Всі</div></>}></NavigationBtn>
            <NavigationBtn isActive={tab === 'tshirts'} onClick={() => setTab('tshirts')} children={<><div className='children__NavigationBtn'>Футболки</div></>}></NavigationBtn>
            <NavigationBtn isActive={tab === 'hoodies'} onClick={() => setTab('hoodies')} children={<><div className='children__NavigationBtn'>Худі</div></>}></NavigationBtn>
            <NavigationBtn isActive={tab === 'caps'} onClick={() => setTab('caps')} children={<><div className='children__NavigationBtn'>Кепки</div></>}></NavigationBtn>
            <NavigationBtn isActive={tab === 'accessories'} onClick={() => setTab('accessories')} children={<><div className='children__NavigationBtn'>Аксесуари</div></>}></NavigationBtn>
        </section>
        <section className="Content__Navigation">
            <>
            {tab === 'all' && <AllProducts receivedData={receivedData}/>}
            {tab === 'tshirts' && <Tshirts receivedData={receivedData}/>}
            {tab === 'hoodies' && <Hoodies receivedData={receivedData}/>}
            {tab === 'caps' && <Caps receivedData={receivedData}/>}
            {tab === 'accessories' && <Accessories receivedData={receivedData}/>}
            </>
        </section>
        </>

    )
}
export default Navigation;
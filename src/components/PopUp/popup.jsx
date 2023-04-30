import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import './style.css'
import ProductList from '../CatalogPage/ProductList/ProductList'

function Popup ({opened}){


    const [count, setCount] = useState(1)
    const [arr, setArr] = useState([])

    useEffect(() => {

        fetch('https://creative-depo.onrender.com/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setArr(data)
                console.log(arr)
            });
    })

    let element = document.getElementById("block")

    

    return(
        {opened ? (<p>Opened</p>) : null }

        // <div className="popup-wrap" id="popupWrap">
        //     <div className="close-window"><span onClick={function(){
        //         $('.popup-wrap').css("display", "none")
        //     }}>+</span></div>
        //     <div className="block-popup">
        //         <div className="left">
        //             <div className="popupImage"></div>
        //         </div>
        //         <div className="right">
        //             <h2 className="popup-name"></h2>
        //             <p className="popup-code">Код товару: <span className="code-popup"></span></p>
        //             <p className="popup-price"></p>
        //             <p className="popup-color"></p>
        //             <div className="row_inp_btn">
        //                 <div className="btn-box">
        //                     <button className="add_cart">ДОДАТИ ДО КОШИКА</button>
        //                 </div>
        //             </div>
        //             <p className="popup-sizes"></p>
        //             <p className="popup-colors"></p>
        //             <p className="popup-cloth"></p>
        //             <p className="popup-density"></p>
        //             <p className="popup-description">Ідея зробити такий принт посіла у наші голови щойно ми вирішили створити Українську колекцію. Уявляємо, як після перемоги будемо подорожувати світом у такій футболці або худі, і тим надписом все буде сказано!</p>
        //             <p className="popup-plus">
        //                 <b>Купуючи цей мерч, ти:</b>
        //                 <li>Допомагаєш ЗСУ (частина від прибутку)</li>
        //                 <li>Забезпечуєш роботою українців, пов'язаних з виробництвом</li>
        //                 <li>Допомагаєш функціонувати та сплачувати податки малому бізнесу — розвиваєш економіку країни</li>
        //                 <li>Отримуєш класнючий мерч, заряджений на козацький драйв та перемогу</li>
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Popup;
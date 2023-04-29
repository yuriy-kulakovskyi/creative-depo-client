import React from "react";
import { ReactDOM } from "react";

import jquery from 'jquery'
import $ from 'jquery'

import { useState } from "react";
import { useEffect } from "react";

function Popup (){


    const [count, setCount] = useState(1)

    let arr = []

    useEffect(() => {

        fetch('https://creative-depo.onrender.com/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                arr = data
                console.log(arr)
            });

        $('.block').click(function(e){
            setCount(1)
            let idCard  = e.target.id;
            idCard = idCard.slice(5);
            let foundIndex = arr.findIndex((n) => n._id == idCard);
            console.log(arr[foundIndex]);
            $('.popup-code').css("display", "flex")
            $('.popup-color').css("display", "flex")
            $('.popup-wrap').css("display", "flex")
            $('.popup-description').css("display", "flex")
            $('.popup-plus').css("display", "flex")
            $('.popupImage').css("background-image", "url(" + arr[foundIndex].main_img + ")")
            $('.popup-name').html('<b>' + arr[foundIndex].name + '</b>')
            $('.popup-price').html('<b>' + arr[foundIndex].price + ' грн.</b>')
            $('.popup-color').html('<b>Колір:</b> ' + arr[foundIndex].color)
            if (arr[foundIndex].category == "футболки" || arr[foundIndex].category == 'худі'){
                $('.code-popup').html(arr[foundIndex].code)
                $('.popup-sizes').html('<b>Розміри:</b> ' + arr[foundIndex].sizes)
                $('.popup-colors').html('<b>Кольори:</b> ' + arr[foundIndex].colors)
                $('.popup-cloth').html('<b>Тканина:</b> ' + arr[foundIndex].cloth)
                $('.popup-density').html('<b>Щільність:</b> ' + arr[foundIndex].density)
            } else if (arr[foundIndex].category == 'кепки'){
                $('.popup-sizes').html('<b>Розміри:</b> ' + arr[foundIndex].sizes)
                $('.popup-colors').html('<b>Кольори:</b> ' + arr[foundIndex].colors)
                $('.popup-cloth').html('<b>Тканина:</b> ' + arr[foundIndex].cloth)
            } else if (arr[foundIndex].category == "аксесуари"){
                $('.popup-code').css("display", "none")
                $('.popup-color').css("display", "none")
                $('.popup-sizes').html('<b>Для документів: </b> ' + arr[foundIndex].documents)
                $('.popup-colors').html('<b>Колір: </b> ' + arr[foundIndex].color)
                $('.popup-cloth').html('<b>Матеріал: </b> ' + arr[foundIndex].material)
                $('.popup-density').html('<b>Друк: </b> ' + arr[foundIndex].print)
                $('.popup-description').css("display", "none")
                $('.popup-plus').css("display", "none")
            }
        });

    })

    return(

        <div className="popup-wrap">
            <div className="close-window"><span onClick={function(){
                $('.popup-wrap').css("display", "none")
            }}>+</span></div>
            <div className="block-popup">
                <div className="left">
                    <div className="popupImage"></div>
                </div>
                <div className="right">
                    <h2 className="popup-name"></h2>
                    <p className="popup-code">Код товару: <span className="code-popup"></span></p>
                    <p className="popup-price"></p>
                    <p className="popup-color"></p>
                    <div className="row_inp_btn">
                        <div className="inp">
                            <button className="minus" onClick={function(){
                                if (count > 1){
                                    setCount(prevCount => prevCount - 1);
                                }
                            }}>-</button>
                            <input type="text" value={count} />
                            <button className="plus" onClick={function(){
                                setCount(prevCount => prevCount + 1);
                            }}>+</button>
                        </div>
                        <div className="btn-box">
                            <button className="add_cart">ДОДАТИ ДО КОШИКА</button>
                        </div>
                    </div>
                    <p className="popup-sizes"></p>
                    <p className="popup-colors"></p>
                    <p className="popup-cloth"></p>
                    <p className="popup-density"></p>
                    <p className="popup-description">Ідея зробити такий принт посіла у наші голови щойно ми вирішили створити Українську колекцію. Уявляємо, як після перемоги будемо подорожувати світом у такій футболці або худі, і тим надписом все буде сказано!</p>
                    <p className="popup-plus">
                        <b>Купуючи цей мерч, ти:</b>
                        <li>Допомагаєш ЗСУ (частина від прибутку)</li>
                        <li>Забезпечуєш роботою українців, пов'язаних з виробництвом</li>
                        <li>Допомагаєш функціонувати та сплачувати податки малому бізнесу — розвиваєш економіку країни</li>
                        <li>Отримуєш класнючий мерч, заряджений на козацький драйв та перемогу</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Popup;// function Popup (){


//     const [count, setCount] = useState(1)

//     let arr = []

//     useEffect(() => {

//         fetch('https://creative-depo.onrender.com/products')
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 arr = data
//                 console.log(arr)
//             });

//         // $('.product__ProductList').click(function(e){
//         //     alert(e.target.id)
//         // });

//     })

//     return(

//         <div className="popup-wrap"></div>
//     )
// }

// export default Popup;
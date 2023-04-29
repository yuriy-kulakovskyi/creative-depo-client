import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";

import $ from 'jquery'

function PopUpFunc (index){

    // alert(index)

    
    let arr = []

    fetch('https://creative-depo.onrender.com/products')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        arr = data
        // console.log(arr[index]._id)
    });

    const element = document.getElementById("block" + arr[index]._id)

    $(element).click(function(e){
        console.log(e.target.id)
    })

    // $('.popup-code').css("display", "flex")
    // $('.popup-color').css("display", "flex")
    // $('.popup-wrap').css("display", "flex")
    // $('.popup-description').css("display", "flex")
    // $('.popup-plus').css("display", "flex")
    // $('.popupImage').css("background-image", "url(" + arr[index].main_img + ")")
    // $('.popup-name').html('<b>' + arr[index].name + '</b>')
    // $('.popup-price').html('<b>' + arr[index].price + ' грн.</b>')
    // $('.popup-color').html('<b>Колір:</b> ' + arr[index].color)
    // if (arr[index].category == "футболки" || arr[index].category == 'худі'){
    //     $('.code-popup').html(arr[index].code)
    //     $('.popup-sizes').html('<b>Розміри:</b> ' + arr[index].sizes)
    //     $('.popup-colors').html('<b>Кольори:</b> ' + arr[index].colors)
    //     $('.popup-cloth').html('<b>Тканина:</b> ' + arr[index].cloth)
    //     $('.popup-density').html('<b>Щільність:</b> ' + arr[index].density)
    // } else if (arr[index].category == 'кепки'){
    //     $('.popup-sizes').html('<b>Розміри:</b> ' + arr[index].sizes)
    //     $('.popup-colors').html('<b>Кольори:</b> ' + arr[index].colors)
    //     $('.popup-cloth').html('<b>Тканина:</b> ' + arr[index].cloth)
    // } else if (arr[index].category == "аксесуари"){
    //     $('.popup-code').css("display", "none")
    //     $('.popup-color').css("display", "none")
    //     $('.popup-sizes').html('<b>Для документів: </b> ' + arr[index].documents)
    //     $('.popup-colors').html('<b>Колір: </b> ' + arr[index].color)
    //     $('.popup-cloth').html('<b>Матеріал: </b> ' + arr[index].material)
    //     $('.popup-density').html('<b>Друк: </b> ' + arr[index].print)
    //     $('.popup-description').css("display", "none")
    //     $('.popup-plus').css("display", "none")
    // }
}

export default PopUpFunc;
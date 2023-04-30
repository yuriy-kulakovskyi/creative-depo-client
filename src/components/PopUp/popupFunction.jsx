import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";

import $ from 'jquery'

function PopUpFunc (index){

    let arr = []

    fetch('https://creative-depo.onrender.com/products')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        arr = data
        console.log(arr[index]._id)
    });

    let popupwrapEl = document.getElementById("popupWrap")

    popupwrapEl.style.display = "flex"
    document.body.style.overflowY = "hidden"

}

export default PopUpFunc;
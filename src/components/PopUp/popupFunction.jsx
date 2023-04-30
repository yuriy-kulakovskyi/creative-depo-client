import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import Popup from './popup';

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

    let element = document.getElementById("popupWrap")


}

export default PopUpFunc;
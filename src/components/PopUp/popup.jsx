import React, {useState} from 'react';
import './style.css';

import $ from 'jquery'

const Popup = ({ opened, setOpened, arr, objInfo, count, setCount }) => {
  
  console.log(objInfo)
  console.log(arr)

  let block = document.getElementById("block-hidden-overflow")

  return (
    <div>
      {opened ? 
        <div className="popup-wrap" id="popupWrap">
          <div className='closed' onClick={() => {setOpened(false); setCount(1)}}><span>X</span></div>
              <div className="block-popup">
                  <div className="left">
                      <div className="popupImage" style={{backgroundImage: "url(" + objInfo.main_img + ")"}}></div>
                  </div>
                  <div className="right">
                      <h2 className="popup-name">{objInfo.name}</h2>
                      { objInfo.code === '' ? null: <p className="popup-code">Код товару: <span className="code-popup">{objInfo.code}</span></p>}
                      <p className="popup-price">{objInfo.price} {objInfo.currency}</p>
                      {objInfo.color === '' ? null:<p className="popup-color">{objInfo.color}</p>}
                      <div className="row_inp_btn">
                        <div className="inp">
                            <button className="minus" onClick={function(){
                              if(count > 1){
                                setCount(count - 1)
                                }
                            }}>-</button>
                            <div className='div_count'>{count}</div>
                            <button className="plus" onClick={function(){
                              setCount(count + 1)
                            }}>+</button>
                        </div>
                        <div className="btn-box">
                            <button className="add_cart">ДОДАТИ ДО КОШИКА</button>
                        </div>
                      </div>
                      { objInfo.sizes == [] || objInfo.sizes == '' ? null: <p className="popup-sizes">Розміри: </p>}
                      { objInfo.colors == [] || objInfo.colors == '' ? null: <p className="popup-colors">Кольори: {objInfo.colors}</p>}
                      { objInfo.cloth == '' ? null: <p className="popup-cloth">Тканина: {objInfo.cloth}</p>}
                      { objInfo.density == '' ? null: <p className="popup-density">Щільність: {objInfo.density}</p>}
                      { objInfo.documents == '' || objInfo.documents == undefined ? null: <p className="popup-documents">Для документів: {objInfo.documents}</p>} 
                      { objInfo.color == '' || objInfo.color == undefined ? null: <p className="popup-color">Колір: {objInfo.color}</p>} 
                      { objInfo.material == '' || objInfo.material == undefined ? null: <p className="popup-material">Матеріал: {objInfo.material}</p>} 
                      { objInfo.print == '' || objInfo.print == undefined ? null: <p className="popup-print">Друк: {objInfo.print}</p>}
                  </div>
              </div>
          </div>
      : null}
    </div>
  );
}

export default Popup;

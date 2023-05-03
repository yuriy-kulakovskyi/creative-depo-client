import React, {useState} from 'react';
import './style.css';

import $ from 'jquery'

const Popup = ({ opened, setOpened, arr, objInfo }) => {
  
  const [count, setCount] = useState(1)
  console.log(objInfo)
  console.log(arr)

  if (opened == true){
    $('body').css("overflow", "hidden")
  } else {
    $('body').css("overflow", "auto")
  }

  return (
    <div style={{overflowY: 'scroll'}}>
      {opened ? 
        <div className="popup-wrap" id="popupWrap">
              <div className="close-window"><span onClick={() => setOpened(false)}>+</span></div>
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
                            <button className="minus">-</button>
                            <input type="text" value={count} />
                            <button className="plus">+</button>
                        </div>
                        <div className="btn-box">
                            <button className="add_cart">ДОДАТИ ДО КОШИКА</button>
                        </div>
                      </div>
                      { objInfo.sizes == [] || objInfo.sizes == '' ? null: <p className="popup-sizes">Розміри: {objInfo.sizes}</p>}
                      { objInfo.colors == [] || objInfo.colors == '' ? null: <p className="popup-colors">Кольори: {objInfo.colors}</p>}
                      { objInfo.cloth == '' ? null: <p className="popup-cloth">Тканина: {objInfo.cloth}</p>}
                      { objInfo.density == '' ? null: <p className="popup-density">Щільність: {objInfo.density}</p>}
                      { objInfo.documents == '' || objInfo.documents == undefined ? null: <p className="popup-documents">Для документів: {objInfo.documents}</p>} 
                      { objInfo.color == '' || objInfo.color == undefined ? null: <p className="popup-color">Колір: {objInfo.color}</p>} 
                      { objInfo.material == '' || objInfo.material == undefined ? null: <p className="popup-material">Матеріал: {objInfo.material}</p>} 
                      { objInfo.print == '' || objInfo.print == undefined ? null: <p className="popup-print">Друк: {objInfo.print}</p>}
                      {
                        objInfo.category == 'аксесуари' ? null: <div><p className="popup-description">Ідея зробити такий принт посіла у наші голови щойно ми вирішили створити Українську колекцію. Уявляємо, як після перемоги будемо подорожувати світом у такій футболці або худі, і тим надписом все буде сказано!</p>
                        <p className="popup-plus"> 
                            <b>Купуючи цей мерч, ти:</b>
                            <li>Допомагаєш ЗСУ (частина від прибутку)</li>
                            <li>Забезпечуєш роботою українців, пов'язаних з виробництвом</li>
                            <li>Допомагаєш функціонувати та сплачувати податки малому бізнесу — розвиваєш економіку країни</li>
                            <li>Отримуєш класнючий мерч, заряджений на козацький драйв та перемогу</li>
                        </p></div> 
                      }
                  </div>
              </div>
          </div>
      : null}
    </div>
  );
}

export default Popup;

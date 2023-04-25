import React from "react";
import './Caps.css';

const Caps=({receivedData})=>{
    const CapsData=receivedData.filter((item)=>{
        return item.category==="caps";
    })
    return(
        <section className="Caps">
            <>
            {
                CapsData && CapsData.map((product, index)=>{
                    return(
                            <div className="product__Caps" key={index}>
                              <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                              <div className="bottom__product__Caps">
                                <div className="txt__bottom__product__Caps">
                                <p className="caption__bottom__product__Caps">{product.name}</p>
                                <p className="sizes__bottom__product__Caps">
                                    <span>Розмір: </span>{product.sizes}
                                </p>
                                <p className="price__bottom__product__Caps">{product.price} грн.</p>
                                </div>
                                <button className="btn__bottom__product__Caps">Додати у кошик</button>
                              </div>
                            </div>
                    )
                })
            }
            </>
        </section>
    )
}
export default Caps;
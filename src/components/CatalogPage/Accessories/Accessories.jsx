import React from "react";
import './Accessories.css';

const Accessories=({receivedData})=>{
    const AccessoriesData=receivedData.filter((item)=>{
        return item.category==="accessories";
    })
    return(
        <section className="Accessories">
            <>
            {
                AccessoriesData && AccessoriesData.map((product, index)=>{
                    return(
                            <div className="product__Accessories" key={index}>
                              <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                              <div className="bottom__product__Accessories">
                                <div className="txt__bottom__product__Accessories">
                                <p className="caption__bottom__product__Accessories">{product.name}</p>
                                <p className="price__bottom__product__Accessories">{product.price} грн.</p>
                                </div>
                                <button className="btn__bottom__product__Accessories">Додати у кошик</button>
                              </div>
                            </div>
                    )
                })
            }
            </>
        </section>
    )
}
export default Accessories;
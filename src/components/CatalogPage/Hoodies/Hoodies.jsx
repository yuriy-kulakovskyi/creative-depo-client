import React from "react";
import './Hoodies.css';

const Hoodies=({receivedData})=>{
    const HoodiesData=receivedData.filter((item)=>{
        return item.category==="hoodies";
    })
    return(
        <section className="Hoodies">
            <>
            {
                HoodiesData && HoodiesData.map((product, index)=>{
                    const sizesP=product.sizes;
                    return(
                            <div className="product__Hoodies" key={index}>
                              <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                              <div className="bottom__product__Hoodies">
                                <div className="txt__bottom__product__Hoodies">
                                <p className="caption__bottom__product__Hoodies">{product.name}</p>
                                <div className="sizes__bottom__product__Hoodies">
                                    <span>Розмір: </span>
                                    <div className="list__sizes__bottom__product__Hoodies">
                                    {
                                    sizesP && sizesP.map((i, id)=>{
                                        return(
                                            <p key={id}>{i}</p>
                                        )
                                    })
                                    }
                                </div>
                                </div>
                                <p className="price__bottom__product__Hoodies">{product.price} грн.</p>
                                </div>
                                <button className="btn__bottom__product__Hoodies">Додати у кошик</button>
                              </div>
                            </div>
                    )
                })
            }
            </>
        </section>
    )
}
export default Hoodies;

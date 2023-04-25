import React from "react";
import './Tshirts.css';

const Tshirts=({receivedData})=>{
    const TshirtsData=receivedData.filter((item)=>{
        return item.category==="T-shirts";
    })
    return(
        <section className="Tshirts">
            <>
            {
                TshirtsData && TshirtsData.map((product, index)=>{
                    const sizesP=product.sizes;
                    return(
                            <div className="product__Tshirts" key={index}>
                              <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                              <div className="bottom__product__Tshirts">
                                <div className="txt__bottom__product__Tshirts">
                                <p className="caption__bottom__product__Tshirts">{product.name}</p>
                                <div className="sizes__bottom__product__Tshirts">
                                    <span>Розмір: </span>
                                    <div className="list__sizes__bottom__product__Tshirts">
                                    {
                                    sizesP && sizesP.map((i, id)=>{
                                        return(
                                            <p key={id}>{i}</p>
                                        )
                                    })
                                    }
                                </div>
                                </div>
                                <p className="price__bottom__product__Tshirts">{product.price} грн.</p>
                                </div>
                                <button className="btn__bottom__product__Tshirts">Додати у кошик</button>
                              </div>
                            </div>
                    )
                })
            }
            </>
        </section>
    )
}
export default Tshirts;
import React from "react";
import './AllProducts.css';

const AllProducts=({receivedData})=>{
    return(
        <section className="AllProducts">
            <>
            {
                receivedData && receivedData.map((product, index)=>{
                    const sizesP=product.sizes;
                    return(
                        <div className="product__AllProducts" key={index}>
                          <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                          <div className="bottom__product__AllProducts">
                            <div className="txt__bottom__product__AllProducts">
                            <p className="caption__bottom__product__AllProducts">{product.name}</p>
                            <div className="sizes__bottom__product__AllProducts">
                                <span>Розмір: </span>
                                <div className="list__sizes__bottom__product__AllProducts">
                                    {
                                    sizesP && sizesP.map((i, id)=>{
                                        return(
                                            <p key={id}>{i}</p>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <p className="price__bottom__product__AllProducts">{product.price} грн.</p>
                            </div>
                            <button className="btn__bottom__product__AllProducts">Додати у кошик</button>
                          </div>
                        </div>
                    )
                })
            }
            </>
        </section>
    )
}
export default AllProducts;
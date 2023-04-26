import React from "react";
import './ProductList.css';
const ProductList=({filteredProducts})=>{
    return(
        <section className="ProductList">
        {filteredProducts&&filteredProducts.map((product, index)=>{
            const sizesP=product.sizes;
                    return(
                        <div className="product__ProductList" key={index}>
                          <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                          <div className="bottom__product__ProductList">
                            <div className="txt__bottom__product__ProductList">
                            <p className="caption__bottom__product__ProductList">{product.name}</p>
                            <div className="sizes__bottom__product__ProductList">
                                <span>Розмір: </span>
                                <div className="list__sizes__bottom__product__ProductList">
                                    {
                                    sizesP && sizesP.map((i, id)=>{
                                        return(
                                            <p key={id}>{i}</p>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <p className="price__bottom__product__ProductList">{product.price} грн.</p>
                            </div>
                            <button className="btn__bottom__product__ProductList">Додати у кошик</button>
                          </div>
                        </div>
                    )
    })}
        </section>
    )
}
export default ProductList;
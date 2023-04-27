import React from "react";
import './ProductList.scss';
import ProductBtn from "../ProductBtn/ProductBtn";
const ProductList=({filteredProducts})=>{
    return(
        <section className="ProductList">
        {filteredProducts&&filteredProducts.map((product, index)=>{
            const sizesProduct=product.sizes;
            const documentsProduct=product.documents;
            const printProduct=product.print;
                    return(
                        <div className="product__ProductList" id={"block" + product.code} key={index}>
                          <img src={product.main_img} alt={product.name} width="360px" height="360px"></img>
                          <div className="bottom__product__ProductList">
                            <div className="txt__bottom__product__ProductList">
                            <p className="caption__bottom__product__ProductList">{product.name}</p>
                            { sizesProduct && 
                             <div className="sizes__bottom__product__ProductList">
                             <span>Розмір: </span>
                             <div className="list__sizes__bottom__product__ProductList">
                                 {
                                 sizesProduct && sizesProduct.map((i, id)=>{
                                     return(
                                         <p key={id}>{i}</p>
                                     )
                                 })
                                 }
                             </div>
                             </div>
                            }
                            {documentsProduct && <p className="documents__bottom__product__ProductList"><span>Для:</span>{documentsProduct}</p>}
                            {printProduct && <p className="print__bottom__product__ProductList"><span>Друк:</span>{printProduct}</p>}
                            <p className="price__bottom__product__ProductList">{product.price} грн.</p>
                            </div>
                            <ProductBtn/>
                          </div>
                        </div>
                    )
    })}
        </section>
    )
}
export default ProductList;
import React from "react";
import {useState, useEffect, useTransition} from 'react';
import Navigation from "./Navigation/Navigation";
import ProductList from "./ProductList/ProductList";
import './CatalogPage.css';
function CatalogPage(){
    const [isPending, startTransition] = useTransition();
    const [receivedData, setReceivedData]=useState([]);
    const [selectedCategory, setSelectedCategory]=useState('Всі');
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    const Categories=["Всі", "футболки", "худі", "кепки", "аксесуари"];
    useEffect(()=>{
        fetch(`https://creative-depo.onrender.com/products`)
        .then(response=>response.json())
        .then(data=>{
            setReceivedData(data);
            console.log(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err);
            console.log(err.message);
        })

    }, [])
    function CategoryClick(categoryName){
        startTransition(() => {
            setSelectedCategory(categoryName);     
        });
    }
    function filterProducts(receivedData, category){
        if(category===Categories[0]){
            return receivedData;
        }else{
            return receivedData.filter((product)=>product.category===category);
        }
    }
    const filteredProducts=filterProducts(receivedData, selectedCategory);

    return(
        <section className="CatalogPage" id="CatalogPage" >
        <Navigation Categories={Categories} CategoryClick={CategoryClick} selectedCategory={selectedCategory}/>
        {loading ? <div className="loader__CatalogPage"><img src="https://i.stack.imgur.com/kOnzy.gif" width="60px" height="60px"></img></div>:<ProductList filteredProducts={filteredProducts}/>}
        </section>
    )
}
export default CatalogPage;

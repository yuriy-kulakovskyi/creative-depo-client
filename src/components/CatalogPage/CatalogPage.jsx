import React from "react";
import './CatalogPage.css';
import Navigation from "./Navigation/Navigation";
import { useEffect, useState } from "react";
const CatalogPage=()=>{
    const [receivedData, setReceivedData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
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
    return(
        <div className="CatalogPage">
            <Navigation receivedData={receivedData}/>
        </div>
    )
}
export default CatalogPage;
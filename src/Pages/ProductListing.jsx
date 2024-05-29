import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductItem from '../Components/ProductItem';

const ProductListing = () => {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        await axios.get(`http://test.api.boxigo.in/sample-data/`).then((res)=>{
            console.log(res.data.Customer_Estimate_Flow);
            setData((prev)=>res.data.Customer_Estimate_Flow)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1 style={{color:"#9c0101"}}>My Moves</h1>
            {
            data.map((ele,index)=>{
                return <ProductItem data={ele} key={index}/>
            })
            }

        </div>
    )
}

export default ProductListing
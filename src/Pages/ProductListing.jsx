import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductItem from '../Components/ProductItem';

import ProductionItemSkeleton from '../Components/ProductionItemSkeleton';

const ProductListing = () => {
    const intialState = {
        loading: false,
        data: []
    }
    const [state, setState] = useState(intialState);

    const url = process.env.REACT_APP_BACKEND_URL;
    // console.log(process)
    // console.log(url)

    const fetchData = async () => {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sample-data`).then((res) => {
            setState({ ...state, data: res.data.Customer_Estimate_Flow, loading: false })
        })
    }

    useEffect(() => {
        setState({ ...state, loading: true })
        fetchData()
    }, [])

    if (state.loading === true) {
        return <div style={{ width: "100%" }}>
            <h1 style={{ color: "#9c0101", paddingLeft: "20px", marginTop: "5px" }}>My Moves</h1>
            <ProductionItemSkeleton />
            <br />
            <ProductionItemSkeleton />
            <br />
            <ProductionItemSkeleton />
            <br />
            <ProductionItemSkeleton />
        </div>
    }
    return (
        <div>
            <h1 style={{ color: "#9c0101", paddingLeft: "20px", marginTop: "5px" }}>My Moves</h1>
            {
                state.data.map((ele, index) => {
                    return <ProductItem data={ele} key={index} />
                })
            }

        </div>
    )
}

export default ProductListing
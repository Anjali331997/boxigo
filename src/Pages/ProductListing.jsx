import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductListing = () => {
    const [data, setData] = useState();

    const fetchData = async() => {
        const res = await axios.get(`http://test.api.boxigo.in/sample-data/`)
        console.log(res.data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default ProductListing
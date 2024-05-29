import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/ProductItem.css'

const ProductItem = ({ data }) => {
    return (
        <div style={{ display: "flex", gap: "20px", border: "1px solid black", width: "100%" }}>
            <hr/>
            <div className='item-header'>
                <p>
                    <b>From</b><br />
                    {data.moving_from}
                </p>

                <p className='icons'>
                    <i class="bi bi-arrow-right-circle"
                        style={{
                            color: "#9c0101",
                            fontSize: "25px",
                        }}></i>
                </p>

                <p>
                    <b>To</b><br />
                    {data.moving_to}
                </p>

                <p>
                    <b>Request#</b><br />
                    <b style={{ color: "#9c0101" }}>{data.estimate_id}</b>
                </p>
            </div>
            <div className='item-content'></div>
            <div className='item-footer'></div>
        </div>
    )
}

export default ProductItem
import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/ProductItem.css';
import ProductDetails from './ProductDetails'

const ProductItem = ({ data }) => {
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleButtonClick = (id) => {
        setSelectedProductId(selectedProductId === id ? null : id);
    };
    const isflexible = Number(data.move_date_flexible)
    return (
        <div className='item-container' >
            <hr />
            <div className='item-header'>
                <p>
                    <b>From</b><br />
                    {data.moving_from}
                </p>

                <p className='icons'>
                    <i className="bi bi-arrow-right-circle"
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

            <div className='item-content'>
                <div className='infoDiv'>
                    <p>
                        <i className="bi bi-house-door-fill"></i>
                        {data.property_size}
                    </p>
                    <p>
                        <i className="bi bi-luggage-fill"></i>
                        {data.total_items}
                    </p>
                    <p>
                        <i className="bi bi-geo-alt-fill"></i>
                        {data.distance}
                    </p>
                    <p>
                        <i className="bi bi-calendar3"></i>
                        {data.moving_on}
                    </p>
                    <p>

                        <i className={isflexible ? "bi bi-check-square-fill" : "bi bi-x-square-fill"}></i>
                        Is flexible
                    </p>
                </div>

                <div className='buttonDiv'>
                    <button className='details-button'
                        onClick={() => handleButtonClick(data.estimate_id)}>
                            {
                                selectedProductId != null ? "View less details":"View more details"
                            }
                        </button>
                    <button className='quotes-button'>Quotes Awaiting</button>
                </div>
            </div>

            <div className='item-footer'>
                <i className="bi bi-exclamation-triangle-fill"></i>
                <p><b>Disclaimer:</b>Please update your move date before two days of shifting</p>
            </div>

            {selectedProductId === data.estimate_id && (
                <ProductDetails id={data.estimate_id} />
            )}
        </div>
    )
}

export default ProductItem
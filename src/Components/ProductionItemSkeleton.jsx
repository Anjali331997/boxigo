import React from 'react'
import './css/ProductItem.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductionItemSkeleton = () => {
  return (
    <div className='item-container' >
            <hr />
            <div className='item-header'>
                <p className='placeholder'>
                    <b>From</b><br />
                </p>

                <p className='icons'>
                    <i class="bi bi-arrow-right-circle"
                        style={{
                            color: "#9c0101",
                            fontSize: "25px",
                        }}></i>
                </p>

                <p className='placeholder'>
                    <b>To</b><br />
                </p>

                <p className='placeholder'>
                    <b>Request#</b><br />
                    <b style={{ color: "#9c0101" }}></b>
                </p>
            </div>

            <div className='item-content'>
                <div className='infoDiv'>
                    <p className='placeholder'>
                        <i className="bi bi-house-door-fill"></i>
                    </p>
                    <p className='placeholder'>
                        <i className="bi bi-luggage-fill"></i>
                     
                    </p>
                    <p className='placeholder'>
                        <i className="bi bi-geo-alt-fill"></i>
                       
                    </p>
                    <p className='placeholder'>
                        <i className="bi bi-calendar3"></i>
                        
                    </p>
                    <p className='placeholder'>

                        <i className="bi bi-check-square-fill"></i>
                        Is flexible
                    </p>
                </div>

                <div className='buttonDiv'>
                    <button className='details-button placeholder'>
                        
                        </button>
                    <button className='quotes-button placeholder'></button>
                </div>
            </div>

            <div className='item-footer'>
                <i class="bi bi-exclamation-triangle-fill" className='placeholder'></i>
                <p className='placeholder'><b>Disclaimer:</b>Please update your move date before two days of shifting</p>
            </div>
        </div>
  )
}

export default ProductionItemSkeleton
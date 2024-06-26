import React from 'react'
import './css/ProductItem.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductionItemSkeleton = () => {
  return (
    <div className='item-container' >
            <hr />
            <div className='item-header placeholder-glow'>
                <p className='placeholder'>
                    <b>From</b><br />
                </p>

                <p className='icons'>
                    <i className="bi bi-arrow-right-circle  placeholder"
                        style={{
                            color: "#9c0101",
                            fontSize: "25px",
                        }}></i>
                </p>

                <p className='placeholder '>
                    <b>To</b><br />
                </p>

                <p className='placeholder'>
                    <b>Request#</b><br />
                    <b style={{ color: "#9c0101" }}></b>
                </p>
            </div>

            <div className='item-content placeholder-glow'>
                <div className='infoDiv'>
                    <p className='placeholder'>
                        <i className="bi bi-house-door-fill"></i>
                        house
                    </p>
                    <p className='placeholder'>
                        <i className="bi bi-luggage-fill"></i>
                        no of package
                     
                    </p>
                    <p className='placeholder'>
                        <i className="bi bi-geo-alt-fill"></i>
                        distance
                       
                    </p>
                    <p className='placeholder'>
                        <i className="bi bi-calendar3"></i>
                        date-date-date
                        
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

            <div className='item-footer placeholder-glow'>
                <i className="bi bi-exclamation-triangle-fill placeholder" ></i>
                <p className='placeholder'><b>Disclaimer:</b>Please update your move date before two days of shifting</p>
            </div>
        </div>
  )
}

export default ProductionItemSkeleton
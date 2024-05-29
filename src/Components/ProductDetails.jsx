import React from 'react'
import ItemInventoryCollapse from './ItemInventoryCollapse';
import './css/ProductDetails.css'


const ProductDetails = ({ details }) => {
  const inventory = details.items.inventory;

  return (
    <div className='productDetails'>
      <div className='edit-div'>
        <h4 className='edit-headings'>Additional Information</h4>
        <button className='edit-btn'>Edit Additional Info</button>
      </div>

      <p className='test-data-para'>
        Test Data
      </p>

      <div className='edit-div'>
        <h4 className='edit-headings'>House Details</h4>
        <button className='edit-btn'>Edit House Details</button>
      </div>

      <div className='houseDetails-div'>
        <h4 className='houseDetails-heading'>Existing House Details</h4>
        <div>
          <p>
            <b>Floor No.</b>
            <br />
            {details.old_floor_no}
          </p>
          <p>
            <b>Elevator Available.</b>
            <br />
            {details.old_elevator_availability}
          </p>
          <p>
            <b>Distance from Elevator/Staircase to truck.</b>
            <br />
            {details.old_parking_distance}
          </p>
        </div>


      </div>

      <div className='houseDetails-div'>
        <h4 className='houseDetails-heading'>New House Details</h4>
        <div>
          <p>
            <b>Floor No.</b>
            <br />
            {details.new_floor_no}
          </p>
          <p>
            <b>Elevator Available.</b>
            <br />
            {details.new_elevator_availability}
          </p>
          <p>
            <b>Distance from Elevator/Staircase to truck.</b>
            <br />
            {details.new_parking_distance}
          </p>
        </div>
      </div>

      <div className='edit-div'>
        <h4 className='edit-headings'>Inventory Details</h4>
        <button className='edit-btn'>Edit Inventory</button>
      </div>

      <div>
        {
          inventory.map((ele, index) => {
            return <ItemInventoryCollapse key={index} data={ele} />
          })
        }
      </div>
    </div>
  )
}

export default ProductDetails
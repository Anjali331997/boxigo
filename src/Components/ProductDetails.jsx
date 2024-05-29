import React from 'react'
import ItemInventoryCollapse from './ItemInventoryCollapse';



const ProductDetails = ({ details }) => {
  const inventory = details.items.inventory;

  return (
    <div className='productDetails'>
      <hr />
      <div>
        <h4>Additional Information</h4>
        <button>Edit Additional Info</button>
      </div>

      <p>
        Test Data
      </p>

      <div>
        <h4>House Details</h4>
        <button>Edit House Details</button>
      </div>

      <div>
        <h4>Existion House Details</h4>
        <div>
          <p> <b>Floor No.</b>
            <br />
            {details.old_floor_no}
          </p>
        </div>

        <div>
          <p> <b>Elevator Available.</b>
            <br />
            {details.old_elevator_availability}
          </p>
        </div>

        <div>
          <p> <b>Distance from Elevator/Staircase to truck.</b>
            <br />
            {details.old_parking_distance}
          </p>
        </div>
      </div>

      <div>
        <h4>New House Details</h4>
        <div>
          <p> <b>Floor No.</b>
            <br />
            {details.new_floor_no}
          </p>
        </div>

        <div>
          <p> <b>Elevator Available.</b>
            <br />
            {details.new_elevator_availability}
          </p>
        </div>

        <div>
          <p> <b>Distance from Elevator/Staircase to truck.</b>
            <br />
            {details.new_parking_distance}
          </p>
        </div>
      </div>

      <div>
        <h4>Inventory Details</h4>
        <button>Edit Inventory</button>
      </div>

      <div>
        {
          inventory.map((ele, index) => {
           return <ItemInventoryCollapse key={index} data={ele}/>
          })
        }
      </div>
    </div>
  )
}

export default ProductDetails
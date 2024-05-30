import React, { useEffect, useState } from 'react'
import ItemInventoryCollapse from './ItemInventoryCollapse';
import './css/ProductDetails.css'
import axios from 'axios';


const ProductDetails = ({ id }) => {

  const initialState = {
    loading: false,
    data: {},
    inventory: []
  }

  const [state, setState] = useState(initialState)

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sample-data`);
      const item = await res.data.Customer_Estimate_Flow.filter((ele) => ele.estimate_id === id)
      setState({ ...state, data: item[0], loading: false,inventory:item[0].items.inventory });
    } catch (err) {
      console.log(err);
      setState({ ...state, loading: false });
    }
  }

  useEffect(() => {
    setState({ ...state, loading: true })
    fetchData();
  }, [])

  if (state.loading) {
    return <div className='productDetails'>
      <div className='edit-div'>
        <h4 className='edit-headings placeholder'>Additional Information</h4>
        <button className='edit-btn placeholder'></button>
      </div>

      <p className='test-data-para placeholder'>
        Test Data
      </p>

      <div className='edit-div'>
        <h4 className='edit-headings placeholder'>House Details</h4>
        <button className='edit-btn placeholder'></button>
      </div>

      <div className='houseDetails-div'>
        <h4 className='houseDetails-heading placeholder'>Existing House Details</h4>
        <div>
          <p className='placeholder'>
            <b>Floor No.</b>
            <br />

          </p>
          <p className='placeholder'>
            <b>Elevator Available.</b>
            <br />

          </p>
          <p className='placeholder'>
            <b>Distance from Elevator/Staircase to truck.</b>
            <br />

          </p>
        </div>


      </div>

      <div className='houseDetails-div'>
        <h4 className='houseDetails-heading placeholder'>New House Details</h4>
        <div>
          <p className='placeholder '>
            <b>Floor No.</b>
            <br />

          </p>
          <p className='placeholder '>
            <b>Elevator Available.</b>
            <br />

          </p>
          <p className='placeholder '>
            <b>Distance from Elevator/Staircase to truck.</b>
            <br />

          </p>
        </div>
      </div>

      <div className='edit-div'>
        <h4 className='edit-headings placeholder'>Inventory Details</h4>
        <button className='edit-btn placeholder'></button>
      </div>

      <div>
        <div className='placeholder col-12'></div>
        <div className='placeholder col-12'></div>
        <div className='placeholder col-12'></div>
        <div className='placeholder col-12'></div>
        <div className='placeholder col-12'></div>
      </div>
    </div>;
  }

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
            {state.data.old_floor_no}
          </p>
          <p>
            <b>Elevator Available.</b>
            <br />
            {state.data.old_elevator_availability}
          </p>
          <p>
            <b>Distance from Elevator/Staircase to truck.</b>
            <br />
            {state.data.old_parking_distance}
          </p>
        </div>

      </div>

      <div className='houseDetails-div'>
        <h4 className='houseDetails-heading'>New House Details</h4>
        <div>
          <p>
            <b>Floor No.</b>
            <br />
            {state.data.new_floor_no}
          </p>
          <p>
            <b>Elevator Available.</b>
            <br />
            {state.data.new_elevator_availability}
          </p>
          <p>
            <b>Distance from Elevator/Staircase to truck.</b>
            <br />
            {state.data.new_parking_distance}
          </p>
        </div>
      </div>

      <div className='edit-div'>
        <h4 className='edit-headings'>Inventory Details</h4>
        <button className='edit-btn'>Edit Inventory</button>
      </div>

      <div>
        {
          state.inventory.map((ele, index) => {
            return <ItemInventoryCollapse key={index} data={ele} />
          })
        }
      </div>
    </div>
  )
}

export default ProductDetails
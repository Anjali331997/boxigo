import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './css/ItemInventory.css'

const ItemInventoryCollapse = ({ key, data }) => {
    const category = data.category;

    const count = data.category.map((ele, index) => {
        return (ele.items.reduce((acc, elem) => {
            return acc += Number(elem.qty);
        }, 0))
    })

    const total = count.reduce((acc, ele) => {
        return acc += ele;
    })

    return (
        <Accordion>
            <Accordion.Item eventKey={`key`}>
                <Accordion.Header className='collapse-header'>
                    <p className='collapse-heading'> {data.displayName}</p>
                    <span className='total-display'>{total}</span>
                </Accordion.Header>
                <Accordion.Body>
                    {
                        total <= 0 ? <p>No Items in this Category</p> :
                            <div className='sub-category-items'>
{
                                    count.map((ele, i) => {
                                        return ele !== 0 ? <div key={i}>
                                            <h6>{category[i].displayName}</h6>
                                            {
                                                category[i].items.map((elem, index) => {
                                                    return elem.qty >= 1 ? <div
                                                        className='items-div' key={index}>
                                                        <span>
                                                            <p>
                                                                {category[i].displayName}
                                                            </p>
                                                            <p>
                                                                Q:{elem.qty}
                                                            </p>
                                                        </span>
                                                        {elem.type.length > 0 ?
                                                            elem.type
                                                                .filter((typeele) => typeele.selected === true)
                                                                .map((typeele, typeind) => (
                                                                    <p key={typeind} className='type-class'>Type:{typeele.option}</p>
                                                                )) : <p key={i} className='type-class'>Type:NA</p>
                                                        }

                                                    </div> : <></>
                                                })
                                            }
                                        </div>:<></>
                                    })
                                }
                            </div>
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ItemInventoryCollapse
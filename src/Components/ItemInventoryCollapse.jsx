import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

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
                <Accordion.Header>
                    {data.displayName}
                    <span>-{total}</span>
                </Accordion.Header>
                <Accordion.Body>
                    {
                        total <= 0 ? <p>No Items in this Category</p> :
                            <div>
                                {
                                    category.map((ele, index) => {
                                        return <div>
                                            <h6>{ele.displayName}</h6>
                                            {
                                                ele.items.map((elem, index) => {
                                                    return elem.qty >= 1 ? <div
                                                        style={{ border: "1px black solid" }}>

                                                        <span>
                                                            <p>
                                                                {ele.displayName}
                                                            </p>
                                                            <p>
                                                                {elem.qty}
                                                            </p>
                                                        </span>
                                                        {elem.type.length > 0 ?
                                                            elem.type
                                                                .filter(typeele => typeele.selected === true)
                                                                .map((typeele, typeind) => (
                                                                    <p key={typeind}>Type:{typeele.option}</p>
                                                                )) : <p>Type:NA</p>
                                                        }

                                                    </div> : <></>
                                                })
                                            }
                                        </div>
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
import React from "react";
import './Controls.css'
import Builder from "./Builder/Builder";
const products = [
    { title: 'Product1', type: 'product1' },
    { title: 'Product2', type: 'product2' },
    { title: 'Product3', type: 'product3' },
    { title: 'Product4', type: 'product4' },
]

const Controls = (props) => {
    return (
        <div className="controls">
            <div className="price">
                <p>Total Price:{props.price}</p>
            </div>
            {products.map((item) => {
                return <Builder
                    key={item.title}
                    title={item.title}
                    add={() => props.productAdd(item.type)}
                    remove={()=>props.productRemove(item.type)}
                />
            })}
            <button className="order-btn" onClick={props.order}>order</button>
        </div>
    )
}

export default Controls
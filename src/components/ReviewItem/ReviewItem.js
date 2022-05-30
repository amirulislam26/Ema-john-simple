import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, hendelRemoveProduct } = props
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='Review-Item'>

            <div>
                <img src={img} alt="" />
            </div>
            <div className='Review-Item-details-container'>
                <div className='Review-Item-details'>
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: ${quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => hendelRemoveProduct(product)} className='delete-button'>

                        <FontAwesomeIcon className='delete-icon' icon={'faTrashAlt'}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ReviewItem;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Base_url = "http://vietpro.online";

const ProductItem = ({ item }) => {
    return (
        <div className="product-item card text-center">
            <Link to={`product-detail-${item._id}`}><img alt={`${item.name}`} src={`${Base_url}/assets/uploads/${item.image}`} /></Link>
            <h4><Link to={`product-detail-${item._id}`}>{item.name}</Link></h4>
            <p>Giá Bán: <span>{item.price}</span></p>
        </div>
    )
}
export default ProductItem;

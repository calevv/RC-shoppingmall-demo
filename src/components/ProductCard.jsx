import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${product.id}`);
    };
    return (
        <div className="productCardBox" onClick={showDetail}>
            <img src={product.img} alt={product.title} />
            <div>{product.choice ? 'MD PICK' : ''}</div>
            <div>{product.title}</div>
            <div>￦{product.price}</div>
            <div>{product.new ? 'NEW' : ''}</div>
        </div>
    );
};

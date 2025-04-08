import './ProductAll.css';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProduct = async () => {
        let url = `https://my-json-server.typicode.com/calevv/RC-shoppingmall-demo`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };

    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div className="container">
            {productList.map((item) => (
                <ProductCard product={item} />
            ))}
        </div>
    );
};

export default ProductAll;

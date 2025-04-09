import './ProductAll.css';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { HashLoader } from 'react-spinners';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    let [loading, setLoading] = useState(true);
    const [query, setQuery] = useSearchParams();
    const getProduct = async () => {
        let searchQuery = query.get('q') || '';
        try {
            setLoading(true);
            let url = `https://my-json-server.typicode.com/calevv/RC-shoppingmall-demo/products/?q=${searchQuery}`;
            let response = await fetch(url);
            let data = await response.json();
            setProductList(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
    }, [query]);

    return (
        <div>
            {loading ? (
                <div className="spinerContainer">
                    {' '}
                    <HashLoader
                        color=" #ff0000"
                        loading={loading}
                        size={30}
                        aria-label="로딩 스피너"
                        data-testid="로더"
                    />{' '}
                </div>
            ) : (
                <div className="container">
                    {productList.map((item) => (
                        <ProductCard product={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductAll;

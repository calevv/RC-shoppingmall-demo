import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/calevv/RC-shoppingmall-demo/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <div className="detailWrapper">
            <img src={product?.img} alt={product?.title} />
            <div className="detailText">
                <h4>{product?.title}</h4>

                <h5>￦{product?.price}</h5>
                <select name="size" id="">
                    {' '}
                    <option value="" disabled selected>
                        Size
                    </option>
                    {product?.size?.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductDetail;

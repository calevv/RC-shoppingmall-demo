import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import './ProductDetail.css';

const ProductDetail = () => {
    let { id } = useParams();
    let [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        try {
            setLoading(true); // 함수 호출 시 로딩 시작
            let url = `https://my-json-server.typicode.com/calevv/RC-shoppingmall-demo/products/${id}`;
            let response = await fetch(url);
            let data = await response.json();
            setProduct(data);
            setLoading(false); // 데이터 로드 완료 시 로딩 종료
        } catch (err) {
            console.log(err);
            setLoading(false); // 에러 발생 시 로딩 종료
        }
    };

    useEffect(() => {
        getProductDetail();
    }, [id]); // 의존성 배열에 id를 추가하여 id가 변경될 때만 getProductDetail 실행

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
                <div className="detailWrapper">
                    <img src={product?.img} alt={product?.title} />
                    <div className="detailText">
                        <h4>{product?.title}</h4>
                        <h5>₩{product?.price}</h5>
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
                        <button type="button" className="orderButton">
                            구매하기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;

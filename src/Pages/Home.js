import React from 'react';
import ProductItem from '../Components/ProductItem';
import productApi from '../Services/Api';
function Home() {
    const [productNew, setProductNew] = React.useState([]);
    const [productFeature, setProductFeature] = React.useState([]);

    React.useEffect(() => {
        productApi({
            params: {
                limit: 6,
            },
        }).then(({ data }) => {
            setProductNew(data.data.docs)
        });
        productApi({
            params: {
                limit:6,
                'filter[is_featured]': true,
            }
        }).then(({data}) =>{
            setProductFeature(data.data.docs)
        });

    }, []);
    console.log(productFeature);

    return (
        <div>
            <div>
                <div className="products">
                    <h3>Sản phẩm nổi bật</h3>
                    <div className="product-list card-deck">
                        {productFeature.map((product) => {
                            return <ProductItem item={product} key={product._id} />
                        })}

                    </div>

                </div>
                {/*	End Feature Product	*/}
                {/*	Latest Product	*/}
                <div className="products">
                    <h3>Sản phẩm mới</h3>
                    <div className="product-list card-deck">
                        {productNew.map((product) => {
                            return <ProductItem item={product} key={product._id} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
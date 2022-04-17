import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const products_api_url = 'http://localhost:5000/products/'

const Products = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
            await axios.get(products_api_url)
                .then(res => {
                    setProducts(res.data)
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getData()
    }, []);


    return (
        <>
            <Header />
            <PageTitle title="Products" />
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="row">

                        {
                            products.map((product) =>
                                <ProductCard product={product} />
                            )
                        }

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Products
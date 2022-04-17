import React from 'react'

const ProductCard = (props) => {
    const product = props.product;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box">
                <div className="option_container">
                    <div className="options">
                        <a href="" className="option1">
                            {product.name}
                        </a>
                        <a href="" className="option2">
                            Buy Now
                        </a>
                    </div>
                </div>
                <div className="img-box">
                    <img src="images/p1.png" alt="" />
                </div>
                <div className="detail-box">
                    <h5 dangerouslySetInnerHTML={{ __html: product.short_description }}></h5>
                    <h6>
                        $ {product.price}
                    </h6>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
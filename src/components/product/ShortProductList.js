import React from "react";
import Rating from "./Rating";
import { Link, useHistory, Redirect } from "react-router-dom";

const ShortProductList = (props) => {
  const { products } = props;
  const { history } = useHistory();
  const onClick = () => {
    console.log(products);
    history.push(`/product/${products._id}`, { products });
  };

  return (
    <div onclick={onClick} className="col-xl-4 col-lg-4 col-md-6">
      <Link
        to={{
          pathname: `/product/${products._id}`,
          state: {
            products: products,
          },
        }}
      >
        <div className="single-product mb-60">
          <div className="product-img">
            <img
              src="img/categori/product1.png"
              //  src={products.img}
              //  src={collection}

              alt={products.title}
            />
            <div className="new-product">
              <span>New</span>
            </div>
          </div>
          <div className="product-caption">
            <Rating rating={products.rating} numReviews={products.numReviews} />
            <h4>
              <a className="text-dark"  href="#">{products.name}</a>
            </h4>
            <div className="price">
              <ul>
                <li className="text-dark">₦{products.price}</li>

                <li className="discount"> ₦5000</li>
                {/* <li className="discount"> ₦{products.discount}</li> */}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShortProductList;

import React, { useEffect, useState } from "react";
import Rating from "../product/Rating";
import img from "../../img/categori/product1.png";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../units/LoadingBox";
import MessageBox from "../units/MessageBox";
import { detailsProduct } from "../../actions/ProductActions";
import Header from "../units/Header";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.token;
  const productDetails = useSelector((state) => state.productDetails);
  const [qty, setQty] = useState(1);

  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

   
  return (
    <>
    <Header />
    <section class="blog_area section-padding">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant={"danger"}>{error}</MessageBox>
      ) : (
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                <article class="blog_item">
                  <div class="blog_item_img">
                    <img class="card-img w-20 rounded-0" src={img} alt="" />
                  </div>
                </article>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog_right_sidebar">
                <div class="blog_details">
                  <span>
                    <Link className="text-secondary pr-5" to="/">
                      go back
                    </Link>
                    <a class="d-inline-block" href="single-blog.html">
                      <h2>{product.name}</h2>
                    </a>
                  </span>
                  <p>{product.description}</p>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />

                  <ul className="blog-info-link p-3">
                    <li>
                      <a href="#">
                        <i class="fa fa-user"></i> {product.category}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-comments"></i> {product.brand}
                      </a>
                    </li>
                  </ul>
                  {product.countInStock > 0 ? (
                    <span className="p-3 text-success">In Stock</span>
                  ) : (
                    <span className="p-3 text-danger">Unavailable</span>
                  )}
                  {/* <span className="text-success">in stock</span> */}
                  <br />

                    <h3  class="pl-3">₦ {product.price}</h3>
                  <ul className="p-3">
                    {product.countInStock > 0 && (
                      <>
                        <li>
                          <div className="row px-5">
                            <span className="col-md-8">Qty</span>
                            <span class="col-md-4 form-group">
                              <select
                                class="form-control w-20"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </span>
                          </div>
                        </li>
                        <li className="my-5 text-center">
                          <button
                            onClick={addToCartHandler}
                            className="warning-btn text-center"
                          >
                            Add to Cart
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
   </>
  );
};

export default ProductDetail;

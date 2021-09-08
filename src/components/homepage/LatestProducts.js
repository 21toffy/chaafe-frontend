import React, { useEffect } from "react";
import ShortProductList from "../product/ShortProductList";
import LoadingBox from "../units/LoadingBox";
import MessageBox from "../units/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { ListProducts } from "../../actions/ProductActions";

const LatestProducts = () => {
const dispatch = useDispatch()
const productList  = useSelector(state => state.productList)
const { loading, error, products} =productList;

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);
  return (
    <section className="latest-product-area padding-bottom">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant={"danger"}>{error}</MessageBox>
      ) : (
        <div className="container">
          <div className="row product-btn d-flex justify-content-end align-items-end">
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="section-tittle mb-30">
                <h2>Latest Products</h2>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-7">
              <div className="properties__button f-right">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      All
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      New
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Featured
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-last-tab"
                      data-toggle="tab"
                      href="#nav-last"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Offer
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {products.map((products) => (
                  <ShortProductList key={products._id} products={products} />
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                {products.map((products) => (
                  <ShortProductList key={products._id} products={products} />
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row">
                {products.map((products) => (
                  <ShortProductList key={products._id} products={products} />
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-last"
              role="tabpanel"
              aria-labelledby="nav-last-tab"
            >
              <div className="row">
                {products.map((products) => (
                  <ShortProductList key={products._id} products={products} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestProducts;

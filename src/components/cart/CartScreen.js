import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../../actions/cartsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../units/MessageBox";
import Header from "../units/Header";
const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <>
      <Header />
      <section class="blog_area section-padding">
        <div className="row mx-5">
          <div className="col-md-8 ">
            <h1>Shopping Cart</h1>
            <hr />
            {cartItems.length === 0 ? (
              <MessageBox variant={"info"}>
                Cart is empty. <Link to="/">Go Shopping</Link>
              </MessageBox>
            ) : (
              <>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="col-md-4 ">
                          <Link
                            className="text-black text-dark"
                            to={`/product/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </div>
                        <div className="col-md-2">
                          <select
                            className="form-control"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-2">₦ {item.price}</div>
                        <div className="col-md-2">
                          <button
                            className="small-warning-btn"
                            type="button"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <br />
                      <hr />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="col-md-4">
            <div className="card card-body">
              <ul>
                <li className="text-lg font-weight-bold my-5">
                  <span>
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : ₦ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </span>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="warning-btn-square"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartScreen;

import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./components/homepage/HomePage"));
const ProductDetail = lazy(() =>
  import("./components/productdetail/ProductDetail")
);
const CartScreen = lazy(() => import("./components/cart/CartScreen"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CustomLoader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/" exact component={HomePage} /> */}
          <Route path="/product/:token" exact component={ProductDetail} />
          <Route path="/cart/:id?" exact component={CartScreen} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

const CustomLoader = () => {
  return (
    <div style={{ width: "inherit", height: "inherit" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "inherit",
        }}
      >
        <Loader
          type="TailSpin"
          color="#1527C3"
          height={300}
          width={100}
          timeout={0}
        />
      </div>
    </div>
  );
};

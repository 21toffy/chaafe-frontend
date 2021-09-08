import React from "react";

const Rating = (props) => {
  // console.log({...props});
  const { rating, numReviews } = props;
  return (
    <div className="product-ratting">
      <span>
        <i
          className={
            rating >= 1
              ? "far fa-star"
              : rating >= 0.5
              ? "far fa-star low-star"
              : "far fa-star "
          }
        ></i>
        <i
          className={
            rating >= 2
              ? "far fa-star"
              : rating >= 1.5
              ? "far fa-star low-star"
              : "far fa-star "
          }
        ></i>
        <i
          className={
            rating >= 3
              ? "far fa-star"
              : rating >= 2.5
              ? "far fa-star low-star"
              : "far fa-star "
          }
        ></i>
        <i
          className={
            rating >= 4
              ? "far fa-star"
              : rating >= 3.5
              ? "far fa-star low-star"
              : "far fa-star "
          }
        ></i>
        <i
          className={
            rating >= 5
              ? "far fa-star"
              : rating >= 4.5
              ? "far fa-star low-star"
              : "far fa-star "
          }
        ></i>
      </span>
      <span>{numReviews + " reviews"}</span>
      {/* <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star low-star"></i>
        <i className="far fa-star low-star"></i> */}
    </div>
  );
};

export default Rating;

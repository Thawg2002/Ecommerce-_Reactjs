import React from "react";
import { Link } from "react-router-dom";

const ProductByType = ({ productsByType }) => {
  return (
    <>
      <div className="product-main">
        <div className="row producWsite">
          {productsByType.map((product, index) => {
            return (
              <div key={index} className="col">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt="" />
                </Link>

                <h2>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h2>
                <p>{product.price} VNĐ</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductByType;

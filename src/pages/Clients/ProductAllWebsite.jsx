import React from "react";
import { Link } from "react-router-dom";

const ProductAllWebsite = ({ products }) => {
  // const displayedProducts = products.slice(0, 8);
  return (
    <>
      <div className="product-main">
        <h2>Tất cả sản phẩm</h2>
        <div className="row producWsite">
          {products.map((product, index) => {
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

export default ProductAllWebsite;

import React from "react";

const ProductWebsite = ({ products }) => {
  return (
    <div className="row producWsite">
      {products.map((product, index) => {
        return (
          <div key={index} className="col">
            <h2>
              <a href="">{product.name}</a>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default ProductWebsite;

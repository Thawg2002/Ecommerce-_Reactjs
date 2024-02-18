import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/product";
import ProductByType from "./ProductByType";
const getProductsByType = (productList, productType, productId) => {
  return productList.filter(
    (product) => product.productType === productType && product.id !== productId
  );
};

const ProductDetailPage = ({ products }) => {
  const [product, setProduct] = useState({});
  const [productsByType, setProductsByType] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      // console.log(data);
      setProduct(data);
      if (products.length > 0) {
        const productsType = getProductsByType(products, data.productType, id);
        setProductsByType(productsType);
      }
    })();
  }, [id, products]);
  // console.log(productsByType);

  return (
    <>
      <div className="productdetail">
        <div className="productdetail-left">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdetail-right">
          <h2>{product.name}</h2>
          <p> ${product.price}</p>
          <div className="all-info">
            <div className="info-transport">
              <h5>Vận chuyển</h5>
              <div className="info-transport_item">
                <div>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                    alt=""
                  />
                </div>
                <div>
                  Miễn phí vận chuyển <br />
                  Miễn phí vận chuyển cho đơn hàng trên $99
                </div>
                <div>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/baa823ac1c58392c2031.svg"
                    alt=""
                  />
                </div>
                <div>
                  Vận chuyển tới <strong>Chương Mỹ-Hà Nội</strong>
                  <br />
                  Phí vận chuyển <strong>$2</strong>
                </div>
              </div>
            </div>
            <div className="info-size">
              <h6>Size</h6>
              <div className="info-size_item">
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </div>
            </div>
            <div className="info-size">
              <h6>Số lượng</h6>
              <div className="info-size_item">
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-secondary">
              Thêm vào giỏ hàng
            </button>
            <button type="button" className="btn btn-danger">
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
      <div className="productdetail-describe">
        <h5>Mô tả sản phẩm</h5>
        <p>{product.desscription}</p>
      </div>
      <div className="productByType">
        <h6>Sản phẩm cùng loại</h6>
        <ProductByType productsByType={productsByType} />
      </div>
    </>
  );
};

export default ProductDetailPage;

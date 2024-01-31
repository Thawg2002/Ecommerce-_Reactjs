import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ProductAddPage = ({ onAdd }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAdd(data);
    navigate("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link
              to="/admin/products"
              className="btn btn-sm btn-outline-secondary"
            >
              Trở về
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Tên sản phẩm
        </label>
        <input
          type="text"
          {...register("name")}
          id="productName"
          className="form-control"
        />
        <label htmlFor="productImage" className="form-label">
          Anh sản phẩm
        </label>
        <input
          type="text"
          {...register("image")}
          id="productImage"
          className="form-control"
        />{" "}
        <label htmlFor="productPrice" className="form-label">
          Gía sản phẩm
        </label>
        <input
          type="number"
          {...register("price")}
          id="productPrice"
          className="form-control"
        />
        <label htmlFor="productDesc" className="form-label">
          Mô tả sản phẩm
        </label>
        <textarea
          className="form-control"
          {...register("desscription")}
          id="productDesc"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductAddPage;

import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductAddPage = ({ onAdd }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      // Gọi hàm xử lý ảnh và nhận URL ảnh từ Cloudinary
      const imageUrl = await handleUploadImage(data.image);

      // Tạo dữ liệu sản phẩm với URL ảnh
      const productData = {
        name: data.name,
        image: imageUrl,
        price: data.price,
        productType: data.productType,
        description: data.description,
      };

      // Gọi hàm onAdd để thêm sản phẩm
      onAdd(productData);

      // Chuyển hướng sau khi thêm sản phẩm thành công
      navigate("/admin/products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  //Xử lý hình ảnh
  const handleUploadImage = async (files) => {
    const Cloud_name = "dtbgv9jja";
    const Preset_name = "Assignment2_React";
    const Folder_name = "Assignment_React";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${Cloud_name}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", Preset_name);
    formData.append("folder", Folder_name);
    for (const file of files) {
      formData.append("file", file);
      // console.log(formData.append("file", file));
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      urls.push(response.data.secure_url);
    }
    console.log(urls);
    return urls;
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
          type="file"
          {...register("image")}
          multiple
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
        <label htmlFor="productPrice" className="form-label">
          Loại sản phẩm
        </label>
        <select
          name="productType"
          id="productType"
          {...register("productType")}
        >
          <option value=""></option>
          <option value="Ao">Áo</option>
          <option value="Quan">Quần</option>
        </select>
        <br />
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

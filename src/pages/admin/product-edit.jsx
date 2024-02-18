import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/product";
import axios from "axios";

const ProductEditPage = ({ onUpdate }) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [currentImage, setCurrentImage] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      setCurrentImage(data.image);
      // console.log(data.image);
      reset(data);
    })();
  }, [id]);
  const onSubmit = async (data) => {
    // Xử lý hình ảnh mới
    const newImageUrls = await handleUploadImage(data.newImage);
    // console.log(newImageUrls);

    // Cập nhật dữ liệu sản phẩm với hình ảnh mới
    const updatedData = {
      ...data,
      image: newImageUrls[0], // Giả sử chỉ có một hình ảnh mới
    };
    // console.log(updatedData);
    onUpdate(updatedData);
    navigate("/admin/products");
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
      const response = await axios.put(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      urls.push(response.data.secure_url);
    }
    // console.log(urls);
    return urls;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập nhật sản phẩm</h1>
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
        <img
          src={currentImage} // Thay data.image bằng đường dẫn đến hình ảnh hiện tại
          alt="Current Product Image"
          className="mb-3"
          style={{ maxWidth: "300px" }} // Thiết lập kích thước hình ảnh
        />
        <br />
        <label htmlFor="newImage" className="form-label">
          Chọn hình ảnh mới
        </label>
        <input
          type="file"
          {...register("newImage")}
          id="newImage"
          className="form-control"
        />
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
          <option value="Áo">Áo</option>
          <option value="Quần">Quần</option>
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

export default ProductEditPage;

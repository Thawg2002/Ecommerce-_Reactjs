import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/admin/dashboard";
import ProductPage from "./pages/admin/product";
import LayoutAdmin from "./components/layouts/layoutAdmin";
import LayoutWebsite from "./components/layouts/layoutWebsite";
import {
  addProducts,
  getProducts,
  removeProductById,
  updateProducts,
} from "./api/product";
import { ToastContainer, toast } from "react-toastify";
import ProductAddPage from "./pages/admin/product-add";
import ProductEditPage from "./pages/admin/product-edit";
import Overview from "./pages/Clients/Overview";
import ProductWebsite from "./pages/Clients/ProductWebsite";
import ProductDetailPage from "./pages/Clients/ProductDetailPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProductAllWebsite from "./pages/Clients/ProductAllWebsite";
// import "../src/css/layoutWebsite.css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    };

    fetchData(); // Gọi hàm fetchData để kích thích việc fetch dữ liệu
  }, []);
  //Xóa SP
  const onHandleRemove = async (id) => {
    const confirm = window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?");
    if (confirm) {
      try {
        const data = await removeProductById(id);
        console.log(data);
        toast.success("Xóa sản phẩm thành công");
        setProducts(products.filter((products) => products.id !== id));
      } catch (error) {
        toast.error("Xóa sản phẩm thất bại");
      }
    }
  };
  //Thêm SP
  const onHandleAdd = async (product) => {
    try {
      const data = await addProducts(product);
      toast.success("Thêm sản phẩm thành công");
      setProducts([...products, data]);
    } catch (error) {
      toast.error(error);
    }
  };

  //Update SP
  const onHandleUpdate = async (product) => {
    try {
      const data = await updateProducts(product);
      toast.success("Cập nhật sản phẩm thành công");
      // setProducts([...products, data]);
      const newProducts = products.map((item) =>
        item.id === product.id ? product : item
      );
      setProducts(newProducts);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      {/* Clients */}
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route path="" element={<Overview products={products} />} />
          <Route path="abouts" element={<h1>Abouts page</h1>} />
          <Route
            path="products"
            element={<ProductAllWebsite products={products} />}
          />
          <Route
            path="products/:id"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        {/* Admin */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="" element={<DashboardPage />} />
          <Route
            path="products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="products/add"
            element={<ProductAddPage onAdd={onHandleAdd} />}
          />
          <Route
            path="products/:id/edit"
            element={<ProductEditPage onUpdate={onHandleUpdate} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

import instance from "./config";
export const getProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async (id) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const removeProductById = async (id) => {
  try {
    const { data } = await instance.delete(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addProducts = async (product) => {
  try {
    const { data } = await instance.post("/products", product);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateProducts = async (product) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

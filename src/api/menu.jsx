import instance from "./config";

export const menuList = async () => {
  try {
    const { data } = await instance.get("/menu");
    return data;
  } catch (error) {
    return error;
  }
};

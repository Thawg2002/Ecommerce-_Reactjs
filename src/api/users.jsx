import instance from "./config";

export const onHandleSignup = async (userData) => {
  try {
    const { data } = await instance.post("/signup", userData);
    return data;
  } catch (error) {
    return error;
  }
};
export const onHandleSignin = async (userData) => {
  try {
    const { data } = await instance.post("/signin", userData);
    return data;
  } catch (error) {
    return error;
  }
};

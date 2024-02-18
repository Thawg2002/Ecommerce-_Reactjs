import React from "react";
import { onHandleSignin } from "../api/users";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useStorage";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", {});

  const onSubmit = async (data) => {
    try {
      const response = await onHandleSignin(data);

      if (response && response.user) {
        // console.log(response.user);
        setUser(response.user);
        toast.success("Đăng nhập thành công");
        // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        // navigate("/");
        // navigate("/", { replace: true });
        // window.location.reload();
      } else {
        toast.error("Đăng nhập không thành công");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div className="form-signin">
      {JSON.stringify(user)}
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password")}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <a href="/signup" style={{ float: "right" }}>
            Bạn chưa có tài khoản
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signin;

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { onHandleSignup } from "../api/users";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await onHandleSignup(data);
      console.log(response);
      toast.success("Đăng ký thành công");
      navigate("/signin");
    } catch (error) {
      //   console.log(error);
      toast.error("Đăng ký thất bại");
    }
  };
  return (
    <div className="form-signin">
      <h2>Đăng ký</h2>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

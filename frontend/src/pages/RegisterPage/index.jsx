import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/thunkFunctions";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }) => {
    const body = {
      email,
      password,
      name,
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fdf%2F77%2F7a%2Fdf777a668034cb80e6d0d0fa1a1d83cb.jpg&type=ofullfill340_600_png",
    };

    dispatch(registerUser(body));
    reset();
  };

  const userEmail = {
    required: "Required field",
  };

  const userName = {
    required: "Required field",
  };

  const userPassword = {
    required: "Required field",
    minLength: {
      value: 6,
      message: "Password length should be at least 6",
    },
  };

  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow">
        <h1 className="text-3xl front-semibold text-center">Sign up</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("email", userEmail)}
            />
            {errors?.email && (
              <div>
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("name", userName)}
            />
            {errors?.name && (
              <div>
                <span className="text-red-500">{errors.name.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
              {...register("password", userPassword)}
            />
            {errors?.password && (
              <div>
                <span className="text-red-500">{errors.password.message}</span>
              </div>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200"
            >
              Sign up
            </button>
          </div>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            If you already signed up{" "}
            <a href="/login" className="font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;

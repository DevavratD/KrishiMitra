import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

export default function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white">
      <div className="relative w-full max-w-md p-6 space-y-6">
        <button
          onClick={() => navigate("/signup")}
          className="absolute top-4 left-4 text-gray-600"
        >
          <FaArrowLeftLong className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Login Now
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative flex items-center border rounded-md p-2">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email"
                className="ml-2 w-full outline-none bg-transparent"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative flex items-center border rounded-md p-2">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="ml-2 w-full outline-none bg-transparent"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            onClick={() => navigate("/home")}
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md font-semibold mt-5"
          >
            Login
          </button>
        </form>
        <div>
          <p className="text-center text-sm mt-4">
            New to Krishi Mitra?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign up
            </Link>
          </p>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <p className="mx-2 text-sm text-gray-500">or Login with</p>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-center">
            <button className="p-2 border rounded-full shadow-md">
              <FcGoogle size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

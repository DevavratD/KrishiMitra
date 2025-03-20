import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

export default function Signup() {
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
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-gray-600"
        >
          <FaArrowLeftLong className="text-2xl" />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-700">Sign up Now</h2>
          <p className="text-sm text-gray-500">
            Create your account on Krishi Mitra
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative flex items-center border rounded-md p-2">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="ml-2 w-full outline-none bg-transparent"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
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
                {...register("password", {
                  required: "Password is required",
                })}
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
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative flex items-center border rounded-md p-2">
              <FaLock className="text-gray-500" />
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                })}
                placeholder="Confirm your password"
                className="ml-2 w-full outline-none bg-transparent"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md font-semibold mt-5"
          >
            Sign up
          </button>
        </form>
        <p className="text-center text-sm">
          Already a member?{" "}
          <Link to="/login" className="text-blue-600">
            log in
          </Link>
        </p>
      </div>
    </div>
  );
}

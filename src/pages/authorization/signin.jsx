import { FaLock, FaUser } from "react-icons/fa";
import assembly from "../../assets/images/asembly.jpg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({reValidateMode: "onBlur", mode: "all"});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log("Response", res.data)
      localStorage.setItem("accessToken", res.data.accessToken)

      toast.success(res.data.message);
        navigate("/dashboard");
      
    } catch (error) {
      console.log(error)
      toast.error("An error occured!")
    } finally {
      setIsSubmitting(false)
    }
  };
  
  return (
    <div className="m-0 p-0 box-border flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center" style={{ backgroundImage: `url(${assembly})` }}>
      <div className="bg-[#17212D] bg-opacity-80 w-[420px] text-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-extrabold text-3xl text-center mb-6">TaskHub</h1>

          <div className="flex relative mb-4">
            <input
              type="text"
              placeholder="Email"
              required
              className="flex-1 p-2 rounded-lg bg-transparent border border-gray-400"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <FaUser className="absolute left-[350px] top-1/2 transform -translate-y-1/2 text-gray-400 " />
          </div>

          <div className="flex relative mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              className="flex-1 p-2 rounded-lg bg-transparent border border-gray-400 "
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <FaLock className="absolute left-[350px] top-1/2  text-gray-400" />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <span className="text-blue-600 hover:underline" onClick={() => navigate("/reset")}>Forgot Password?</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            {isSubmitting ? <Loader/> : "Signin"}
          </button>

          <div className="mt-4 text-center">
            <p onClick={() => navigate("/signup")} className="cursor-pointer">
              Don't have an account? <span className="text-blue-600 hover:underline">Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;

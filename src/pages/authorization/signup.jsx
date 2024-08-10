
import { useForm } from "react-hook-form";
import port from "../../assets/images/port.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../components/loader";
import { apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit,  formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  const [isSubmitting, setIsSubmitting] = useState(false);





  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password

    }

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);

      toast.success(res.data.message);
      navigate("/signin")

    } catch (error) {
      console.log(error)
      toast.error("An error occured!")
    } finally {
      setIsSubmitting(false)
    }

  };


  return (
    <div
      className="m-0 p-0 box-border flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${port})` }}
    >
      <div className="bg-[#17212D] bg-opacity-80 w-[420px] text-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-extrabold text-3xl text-center mb-6">TaskerHub</h1>

          <div className="mb-6">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              required
              className="w-full p-2 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("firstName", { required: "First name is required" })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>)}
          </div>

          <div className="mb-6">
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-2 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("lastName", { required: "Last name is required" })}
              aria-invalid={errors.lastName ? "true" : "false"}

            />
            {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>)}
          </div>

          <div className="mb-6 relative">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-2 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Email is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
          </div>

          <div className="mb-6 flex items-center">
            <select
              id="country-code"
              className="mr-2 p-2 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            >
              <option >+233 (Ghana)</option>
              <option >+234 (Nigeria)</option>
              <option>+1 (USA)</option>
              <option>+44 (UK)</option>
              <option>+91 (India)</option>
              <option >+61 (Australia)</option>

            </select>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phoneNumber", { required: "Phone number is required" })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
            {errors.phoneNumber && (<p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>)}
          </div>

          <div className="mb-6 relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              required
              className="w-full p-2 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold"
          >
            {isSubmitting ? <Loader /> : "Sign Up"}
          </button>

          <p className="mt-4 text-center text-sm">
            By creating an account, you agree to our <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
          </p>

          <div className="container signin text-center pt-3">
            <p className="text-sm">
              Already have an account? <a href="#" className="text-blue-600" onClick={() => navigate("/signin")}>Sign in</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

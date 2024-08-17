
import tools from "../../assets/images/tools.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "../../components/loader";
import { useState } from "react";
import { apiSignUp } from "../../services/tasker";
import { toast } from "react-toastify";

const SignnUp = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      selectACategory: data.selectACategory,
      termsAccepted: true

    }

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);

      toast.success(res.data.message);
      navigate("/login")

    } catch (error) {
      console.log(error)
      toast.error("An error occured!")
    } finally {
      setIsSubmitting(false)
    }

  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${tools})` }}
    >
      <div className="bg-[#A5927D] bg-opacity-90 w-full max-w-lg mx-4 p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-extrabold text-3xl text-center mb-8">Sign Up to Become a Tasker</h1>

          <div className="mb-4">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("firstName", { required: "First name is required" })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>)}
          </div>

          <div className="mb-4">
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("lastName", { required: "Last name is required" })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>)}
          </div>

          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              
              {...register("email", { required: "email is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
          </div>

          <div className="mb-4 flex items-center">
            <select
              id="country-code"
              className="mr-2 p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>+233 (Ghana)</option>
              <option>+234 (Nigeria)</option>
              <option>+1 (USA)</option>
              <option>+44 (UK)</option>
              <option>+91 (India)</option>
              <option>+61 (Australia)</option>
            </select>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phoneNumber",)}
            />
          </div>

          <div className="mb-4">
            <select
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
              {...register("selectACategory", { required: "selectACategory is required" })}
            >

              <option>Select Category</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>Cleaner</option>
              <option>Painter</option>
              <option>Carpenter</option>
              <option>Driver</option>
            </select>
            {errors.selectACategory && (<p className="text-red-500 text-sm mt-1">{errors.selectACategory.message}</p>)}
          </div>

          {/* <div className="mb-4">
            <input
              type="text"
              placeholder="About"
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("About",)}
            />
          </div> */}

          {/* <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your Location"
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("Location",)}
            />
          </div> */}

          <div className="mb-4">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: "password is required" })}
            />
          </div>

          {/* <div className="mb-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ArrowBigUp size={24} />
              <h3>Upload Image</h3>
            </div>
            <label className="w-full">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                id="flier"
                name="flier"
              />
            </label>
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold "
          >
            {isSubmitting ? <Loader /> : "Sign Up"}
          </button>

          <p className="mt-4 text-center text-sm text-black">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-blue-800 underline" >
              Terms & Conditions
            </a>.
          </p>

          <div className="mt-4 text-center">
            <p className="text-sm text-black">
              Already have an account?{" "}
              <a href="#" className="text-blue-800 font-medium" onClick={() => navigate("/login")}>
                Login
              </a>.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SignnUp;

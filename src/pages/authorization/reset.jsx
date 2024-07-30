import carpenter from "../../assets/images/carpenter.jpg";

const Reset = () => {
  return (
    <div
      className="m-0 p-0 box-border flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${carpenter})` }}
    >
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Recover Password</h1>
        <p className="text-center mb-6">
          Enter your email and we'll send you instructions to set your password.
        </p>

        <form>
          <div className="flex relative mb-4">
            <input 
              type="email"
              placeholder="Enter email"
              required
              className="flex-1 p-3 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg "
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;

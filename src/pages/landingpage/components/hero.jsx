import carpentercutting from "../../../assets/images/carpentercutting.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="text-center lg:text-left text-white p-8 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Find Your Perfect Tasker
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Connect with professionals for all your home needs
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start">
          <input
            type="text"
            list="tasks"
            placeholder="Search for tasks or professionals..."
            className="w-full sm:max-w-md px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none border-none focus:outline-none text-black"
          />
          <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-b-lg sm:rounded-r-lg sm:rounded-b-none">
            Search
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 p-8">
        <img
          src={carpentercutting}
          alt="heroimage"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;

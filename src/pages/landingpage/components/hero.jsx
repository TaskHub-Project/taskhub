import carpentercutting from "../../../assets/images/carpentercutting.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-500 ">
      <div className="text-center lg:text-left text-white p-8 lg:w-1/2">
        <h1 className="text-5xl font-bold">Find Your Perfect Tasker</h1>
        <p className="mt-4 text-xl">Connect with professionals for all your home needs</p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <input
            type="text"
            list="tasks"
            placeholder="Search for tasks or professionals..."
            className="w-full max-w-md px-4 py-2 rounded-l-lg border-none focus:outline-none text-black"
          />
          <datalist  id="tasks">
            <option value="Moving" />
            <option value="Repairs" />
            <option value="Cleaning" />
            <option value="Electrician" />
            <option value="Painting" />
          </datalist>
          <button
            className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-r-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>


      </div>

      <div className="lg:w-1/2 p-8">
        <img src={carpentercutting} alt="heroimage" className="w-full h-auto rounded-lg shadow-md" />
      </div>


    </div>
  );
};

export default Hero;

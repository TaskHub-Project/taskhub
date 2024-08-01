import kitchen from "../../../assets/images/kitchen.jpg";


const Works = () => {
  return (
    <div
      className="m-0 p-0 box-border flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${kitchen})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">How it Works</h2>

        <div className="mb-4">
        
          <h3 className="text-xl font-semibold inline-block ml-2">
            Tell us what your home needs
          </h3>
          <p className="mt-2 text-gray-700">
            From routine maintenance and repairs to dream home renovations, we can help with any project — big or small.
          </p>
        </div>

        <div className="mb-4">
         
          <h3 className="text-xl font-semibold inline-block ml-2">
            We’ll match you with personalized solutions
          </h3>
          <p className="mt-2 text-gray-700">
            See your price and book services in an instant. Or, request and compare quotes from highly rated pros near you.
          </p>
        </div>

        <div className="mb-4">
          
          <h3 className="text-xl font-semibold inline-block ml-2">
            Trusted Professionals
          </h3>
          <p className="mt-2 text-gray-700">
            When you book and pay with TaskerHub, you’re covered by our trusted professionals. We’ll cover your projects up to full purchase price, plus limited damage protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;

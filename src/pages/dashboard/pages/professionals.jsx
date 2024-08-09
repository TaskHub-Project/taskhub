import cleanimg from "../../../assets/images/cleanimg.avif"
import blackman from "../../../assets/images/blackman.jpg"
import electrihelp from "../../../assets/images/electrihelp.jpg"
import { useNavigate } from "react-router-dom"

const Professionals = () => {
  const navigate = useNavigate()
  return (
    <div className="mr-7 ml-7">

      <div className="text-3xl font-bold text-center pt-8">
        <h1>Browse Professionals</h1>
      </div>

      <div className="pt-10 flex">

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-10 mr-4">
          <div className="flex items-center p-6">
            <img
              src={cleanimg}
              alt="Cleaner"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="ml-6">
              <h2 className="text-xl font-bold text-blue-500">Professional Cleaner</h2>
              <h2 className="text-xl font-bold text-gray-800">Natalie Gray</h2>
              <p className="text-gray-600 text-lg font-semibold">GHS200/hr</p>
              <span className="block text-sm text-black mt-2">2 hours minimum</span>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-100">
            <h2>Professional Cleaner</h2>
            <h3 className="text-lg font-semibold text-gray-800">How may I help?</h3>
            <p className="text-gray-600 mt-2 text-base">
              I am an experienced cleaner with a strong background in deep cleaning houses, kitchens, floors, and bathrooms. I take pride in delivering exceptional cleaning services, ensuring every space I work on is spotless and hygienic. My attention to detail and commitment to high standards make me  reliable.
            </p>
          </div>

          <div className="flex justify-center pt-4" onClick={() => navigate("/form")}>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg  focus:outline-none focus:ring-2  focus:ring-opacity-75">
              Select & Continue
            </button>

          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-10 mr-4">
          <div className="flex items-center p-6">
            <img
              src={electrihelp}
              alt="Electrician"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="ml-6">
              <h2 className="text-xl font-bold text-blue-500">Professional Electrician</h2>
              <h2 className="text-xl font-bold text-gray-800">Joshua Mensah</h2>
              <p className="text-gray-600 text-lg font-semibold">GHS250/hr</p>
              <span className="block text-sm text-black mt-2">2 hours minimum</span>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-100">

            <h3 className="text-lg font-semibold text-gray-800">How may I help?</h3>
            <p className="text-gray-600 mt-2 text-base">
              4 years of experience in installation/replacement of ceiling fans, ventilation fans, light fixtures, breakers, adding/fixing/replacing outlets, switches. A house thermostat installation also falls in this category. I'm a detail-oriented Tasker, and want to ensure your expectations are met.
            </p>
          </div>

          <div className="flex justify-center pt-4" onClick={() => navigate("/form")}>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg  focus:outline-none focus:ring-2  focus:ring-opacity-75">
              Select & Continue
            </button>

          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-10">
          <div className="flex items-center p-6">
            <img
              src={blackman}
              alt="Plumber"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="ml-6">
              <h2 className="text-xl font-bold text-blue-500">Professional Plumber</h2>
              <h2 className="text-xl font-bold text-gray-800">Greg Brown</h2>
              <p className="text-gray-600 text-lg font-semibold">GHS150/hr</p>
              <span className="block text-sm text-black mt-2">2 hours minimum</span>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-100">

            <h3 className="text-lg font-semibold text-gray-800">How may I help?</h3>
            <p className="text-gray-600 mt-2 text-base">
              Experience in minor plumbing repair, troubleshooting, unclogging, dishwashers, garbage disposals, as well as new commode installation and commode resealing/ reinstall Extremely well versed in installing all types of bidets and plumbing fixtures.Completed plumbing projects for residential and commercial properties, successfully resolved a range of plumbing issues and received positive feedback.
            </p>
          </div>

          <div className="flex justify-center pt-4" onClick={() => navigate("/form")}>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg  focus:outline-none focus:ring-2  focus:ring-opacity-75">
              Select & Continue
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Professionals;

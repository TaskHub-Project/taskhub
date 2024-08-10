import blackman from "../assets/images/blackman.jpg";
import { Edit } from "lucide-react";
import Button from "../components/button";
import PagesLayout from "../pages/becometasker/dashboard/layout/pageslayout";
import { useNavigate } from "react-router-dom";

const AccountCard = () => {
  const navigate = useNavigate()
  return (
    <div>


      <PagesLayout  buttonText="Add Profile" onClick={()=> navigate("/profile")}>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-10">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center">
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

            <button className="text-gray-500 hover:text-blue-500">
              <Edit className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-4 bg-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">How may I help?</h3>
            <p className="text-gray-600 mt-2 text-base">
              Experience in minor plumbing repair, troubleshooting, unclogging, dishwashers, garbage disposals, as well as new commode installation and commode resealing/reinstall. Extremely well-versed in installing all types of bidets and plumbing fixtures. Completed plumbing projects for residential and commercial properties, successfully resolved a range of plumbing issues, and received positive feedback.
            </p>
          </div>

          <div className="px-6 py-4 flex justify-center bg-gray-50">
            <Button>Logout</Button>
          </div>
        </div>


      </PagesLayout>


    </div>
  );
};

export default AccountCard;

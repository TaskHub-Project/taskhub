
import vacation from "../../../assets/images/vacation.jpg"
import homeclean from "../../../assets/images/homeclean.jpg"
import officefi from "../../../assets/images/officefi.jpg"
import { useNavigate } from "react-router-dom"
import sinkrepair from "../../../assets/images/sinkrepair.jpg"
import plumbing from "../../../assets/images/plumbing.avif"
import toiletfix from "../../../assets/images/toiletfix.jpg"
import bedroompaint from "../../../assets/images/bedroompaint.jpg"
import paintingbrush from "../../../assets/images/paintingbrush.jpg"
import paint from "../../../assets/images/paint.jpg"
import movinghelp from "../../../assets/images/movinghelp.jpg"
import trash from "../../../assets/images/trash.jpg"
import truckmove from "../../../assets/images/truckmove.avif"
import transport from "../../../assets/images/transport.avif"

const MoreServices = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="relative">
        <img src={transport} alt="Transport" className="w-screen h-[500px]" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h2 className="text-black h-24  text-4xl font-bold bg-[#FFFFFF] bg-opacity-50 p-4 rounded-lg">
            Choose a service to get started.
          </h2>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center py-10">All Categories</h2>

      <div className="flex flex-row ">

        <div className="px-10">
          <h2 className="font-semibold text-3xl">Cleaning</h2>
          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={vacation} alt="Vacation" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Vacation Rental Cleaning</span>
          </div>
          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Apartment Cleaning</a>
            <a href="">Living Room Cleaning</a>
            <a href="">Home Sanitization</a>
            <a href="">Move In Cleaning</a>
            <a href="">Garage Cleaning</a>
            <a href="">Deep Cleaning</a>
          </div>

        </div>

        <div className="py-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={homeclean} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Home Cleaning</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Bedroom Cleaning</a>
            <a href="">Move Out Cleaning</a>
            <a href="">Deep Cleaning Service</a>
            <a href="">Commercial Sanitization</a>
            <a href="">HouseKeeping</a>
            <a href="">Home Cleaning</a>
          </div>

        </div>

        <div className="py-10 px-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={officefi} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Office Cleaning</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Same Day Cleaning</a>
            <a href="">Maid Service</a>
            <a href="">Office Cleaning</a>
            <a href="">Kitchen Cleaning</a>
            <a href="">Room Cleaning</a>
            <a href="">Garage Cleaning</a>
          </div>

        </div>

      </div>
      <div className="flex flex-row ">

        <div className="px-10">
          <h2 className="font-semibold text-3xl">Plumbing</h2>
          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={sinkrepair} alt="Vacation" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Faucet Replacement</span>
          </div>
          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Sink Replacement</a>
            <a href="">Unclog Toilet</a>
            <a href="">Plumbing Service</a>
            <a href="">Drain Replacement</a>
          </div>

        </div>

        <div className="py-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={plumbing} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Plumbing Service</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Toilet Replacement</a>
            <a href="">Toilet Trouble</a>
            <a href="">Faucet Repair</a>
          </div>

        </div>

        <div className="py-10 px-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={toiletfix} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Toilet Trouble</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Toilet Repair</a>
            <a href="">Faucet Replacement</a>
            <a href="">Unclog Toilet</a>
          </div>

        </div>

      </div>
      <div className="flex flex-row ">

        <div className="px-10">
          <h2 className="font-semibold text-3xl">Painting</h2>
          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={bedroompaint} alt="Vacation" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Bedroom Painting</span>
          </div>
          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Bedroom Painting</a>
            <a href="">Bricks Painting</a>
            <a href="">House Painting</a>
            <a href="">WallPapering</a>
          </div>

        </div>

        <div className="py-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={paintingbrush} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Wall Painting</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Accent Wall Painting</a>
            <a href="">Wall Painting</a>
            <a href="">Door Painting</a>
          </div>

        </div>

        <div className="py-10 px-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={paint} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Toilet Trouble</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Doorframe Painting</a>
            <a href="">Interior Painting</a>
            <a href="">Baseboard Painting</a>
          </div>

        </div>

      </div>

      <div className="flex flex-row ">

        <div className="px-10">
          <h2 className="font-semibold text-3xl">Moving</h2>
          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={movinghelp} alt="Vacation" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Moving Help</span>
          </div>
          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Furniture Removal</a>
            <a href="">Packing Service</a>
            <a href="">Unpacking Service</a>
            <a href="">Storage Unit Moving</a>
          </div>

        </div>

        <div className="py-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={trash} alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Trash Removal Help</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Junk Removal</a>
            <a href="">Commercial Trash Removal</a>
            <a href="">Home trash Removal</a>
            <a href="">Trash Help</a>
          </div>

        </div>

        <div className="py-10 px-10">

          <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center max-w-xs my-4 ">
            <img src={truckmove

            } alt="" className="w-full rounded-t-lg " />
            <span className=" block mt-2 font-bold">Full Service Help Moving</span>
          </div>

          <div className="flex flex-col space-y-5 text-lg" onClick={() => navigate("/prof")}>
            <a href="">Heavy Furniture Moving</a>
            <a href="">Heavy Lifting</a>
            <a href="">Truck Assited Help Moving</a>
            <a href="">Truck Assited Help Moving</a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MoreServices
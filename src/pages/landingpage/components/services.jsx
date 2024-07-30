import React, { useState } from 'react';
import { Hammer, Paintbrush, Truck } from 'lucide-react';
import cleantool from "../../../assets/images/cleantool.png";
import saw from "../../../assets/images/saw.png";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Hammer className="w-12 h-12" />, 
      label: "Home Repairs",
      activities: ["Plumbing Helps", "Repairing walls", "Electrical Help", "Light Carpentry", "Flooring and Tiling Help", "Appliance Installation and Repairs"]
    },
    {
      icon: <Truck className="w-12 h-12" />, 
      label: "Moving",
      activities: ["Help Moving", "Trash & Furniture Removal", "Hevay Lifting & Transporting"]
    },
    {
      icon: <img src={cleantool} alt="Cleaning Tool" className='w-12 h-12' />, 
      label: "Cleaning",
      activities: ["Help Cleaning", "Party Cleaning", "Appartment & Home Cleaning", "Deep Cleaning", 'Warehouse Cleaning', "Garage Cleaning"]
    },
    {
      icon: <Paintbrush className="w-12 h-12" />, 
      label: "Painting",
      activities: ["Interior painting", "Exterior painting", "Concrete and Brick Painting", "Wallpaper Removal", "Wallpapering"]
    },
    {
      icon: <img src={saw} alt="Saw" className='w-12 h-12' />, 
      label: "Carpentry Work",
      activities: ["Building shelves", "Installing cabinets", "Repairing furniture"]
    }
  ];

  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className='py-16 '>
      <h2 className='text-center text-3xl font-bold mb-8 text-blue-400'>Our Services</h2>
      <div className='flex justify-around flex-wrap'>
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleServiceClick(index)} 
            className='flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg p-4 bg-white rounded-lg shadow-md m-4'
          >
            {service.icon}
            <label className='mt-2 text-xl font-semibold '>{service.label}</label>
            {activeService === index && (
              <div className='mt-2 flex flex-wrap justify-center'>
                {service.activities.map((activity, i) => (
                  <button key={i} className=' text-black py-1 px-3 m-1 rounded-full border border-blue-400 '>
                    {activity}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

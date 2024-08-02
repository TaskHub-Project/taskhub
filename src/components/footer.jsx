import mastercard from "../assets/images/mastercard.jpg";
import visa from "../assets/images/visa.jpg";
import mtn from "../assets/images/mtn.jpeg";
import { MapIcon, PhoneCall, Globe2Icon, Facebook, Instagram, Twitter } from "lucide-react";
import { BiEnvelopeOpen } from "react-icons/bi";
import playstore from "../assets/images/playstore.png"
import apple from "../assets/images/apple.png"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-semibold mb-4">TaskerHub</h3>
          <h4 className="font-semibold mb-2">Discover</h4>
          <a href="Explore Services" className="block mb-1">All Services</a>
          <a href="Tasker" className="block">Become a Tasker</a>

          <div className="flex gap-4 py-4">
            <img src={mastercard} alt="Mastercard" className="w-12" />
            <img src={visa} alt="Visa" className="w-12" />
            <img src={mtn} alt="MTN" className="w-12" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 ">Contact Us</h3>
          <div className="text-sm space-y-3">
            <div className="flex items-center gap-4">
              <MapIcon className="w-5 h-5" />
              <span>184 Main Collins Street</span>
            </div>
            <div className="flex items-center gap-4">
              <PhoneCall className="w-5 h-5" />
              <span>+233 735 5916</span>
            </div>
            <div className="flex items-center gap-4">
              <BiEnvelopeOpen className="w-5 h-5" />
              <span>taskerhub@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe2Icon className="w-5 h-5" />
              <span>www.taskerhub.com</span>
            
            </div>
            <div className="flex gap-4">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>

        <div className="text-sm space-y-3">
          <h3 className="font-semibold text-lg">DownLoad Our App</h3>
          <p>Connect with Professionals whereever you are with our Mobile App</p>

          <div className="flex gap-5 w-36">
            <img src={apple} alt="apple"  />
            <img src={playstore} alt="play" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;

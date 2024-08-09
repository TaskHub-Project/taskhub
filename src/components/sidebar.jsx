// import { useState } from "react"
// import greater from "../assets/images/greater.png"
// import settings from "../assets/images/settings.png"

// const SideBar = () => {
//   const [open, setOpen] = useState(true)
//   return (
//     <div className="flex">
//       <div className={`${open ? "w-72" : "w-20"} duration-300  p-5 pt-8  h-screen bg-blue-500 relative`}>
//         <img src={greater} alt="" className={`absolute cursor-default -right-3 top-9 w-7 border border-white rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

// <div className="flex gap-x-4 items-center">
//   <img src={settings} alt="" className={`w-7 cursor-pointer duration-500 border border-blue-800 rounded-lg `} />
//   <h2 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>DashBoard</h2>
  
// </div>


//       </div>

//       <div className="p-7 text-2xl font-semibold flex-1 h-screen">
//         <h2>Home</h2> 
//       </div>


//     </div>
//   )
// }

// export default SideBar
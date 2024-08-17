import carpenter from "../assets/images/carpenter.jpg"
import maleclean from "../assets/images/maleclean.jpg"
import manpainting from "../assets/images/manpainting.jpg"
import man from "../assets/images/man.avif"
import moving from "../assets/images/moving.jpg"
import plumbing from "../assets/images/plumbing.avif"
import trash from "../assets/images/trash.jpg"
import designs from "../assets/images/designs.jpg"

const F = {

  NAVLINKS: [
    {
      path: "/",
      name: ""
    },

    {
      name: "Services",
      path: "/service"
    },

    {
      name: "Signin",
      path: "/signin"
    },

    {
      name: "Signup",
      path: "/signup"
    },

    {
      name: "Become a Tasker",
      path: "/tasker"
    },


    {
      name: "Login as a Tasker",
      path: "/login"
    },

  ],

  NOTIFY: [

    {
      title: "Task Updates",
      email: <input type="checkbox" name="" id="" />,
      sms: <input type="checkbox" name="" id="" />,
      push: <input type="checkbox" name="" id="" />
    },
    {
      title: "Promotional Emails and Notifications",
      email: <input type="checkbox" name="" id="" />,
      sms: <input type="checkbox" name="" id="" />,
      push: <input type="checkbox" name="" id="" />
    }


  ],

  TASKS: [

    {
      title: "Deep Cleaning",
      name: "Akosua Mansa",
      email: "akosua@gmail.com",
      telephoneNumber: +233540914567,
      location: "Saalai Street, North Kaneshie",
      house: "Adom Villa, Apt #25",
      type: "Medium",
      description: "I need a thorough cleaning in my new house,it's a storey building with 5 bedroom, 5 washroom and a garage",
      date: "Friday, 30/08/2024",
      time: "Morning, 10am - 12pm"

    },
    {
      title: "Toilet Replacement",
      name: "Kelvin Mensah",
      email: "mensah@gmail.com",
      telephoneNumber: +233540612597,
      location: "Mukose Street, Dansoman",
      house: "Adom Villa, Apt #65",
      type: "Medium",
      description: "I need a thorough cleaning in my new house,it's a storey building with 5 bedroom, 5 washroom and a garage",
      date: "Thursday, 29/08/2024",
      time: "Morning, 1pm - 3pm"

    }


  ],


  PROJECTS: [

    {
      image: moving,
      title: "Need Help Moving",
      price: "Projects starts at GHS200"
    },


    {
      image: carpenter,
      title: "Carpentry Work",
      price: "Projects starts at GHS100"
    },
    {
      image: maleclean,
      title: "Home,Apartment & Office Cleaning",
      price: "Projects starts at GHS200"
    },
    {
      image: manpainting,
      title: "Painting Work",
      price: "Projects starts at GHS150"
    },
    {
      image: man,
      title: "Electrical Assist",
      price: "Projects starts at GHS50"
    },

    {
      image: plumbing,
      title: "Plumbing Repairs",
      price: "Projects starts at GHS50"
    },
    {
      image: trash,
      title: "Trash Removal Assist",
      price: "Projects starts at GHS100"
    },
    {
      image: designs,
      title: "Interior Design Work",
      price: "Projects starts at GHS500"
    },
  ]
}


export default F;
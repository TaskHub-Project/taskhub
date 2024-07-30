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
      name: "Signin",
      path: "/signin"
    },

    {
      name: "Signup",
      path: "/signup"
    },

    {
      name : "Explore Services",
      path: "/service"
    },

    {
      name: "Become a Tasker",
      path: "/tasker"
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
import { useNavigate } from "react-router-dom";
import F from "../../../constant/constants";
import "./PopularProject.css";

const PopularProject = () => {
  const navigate = useNavigate();

  return (
    <div className="py-[100px]">
      <div className="font-bold text-3xl text-center text-blue-400">
        <h1>Explore Popular Projects</h1>
      </div>
      
      <div className="py-8 px-6 grid grid-cols-1  md:grid-cols-4 gap-4">
        {F.PROJECTS.map((project, index) => {
          return (
            <div key={index} className="project-card">
              <div className="project-card-inner" onClick={() => navigate("signup")}>
                <div className="project-image rounded">
                  <img src={project.image} alt={project.image} />
                </div>
                <div className="project-details">
                  <div>
                    <h3 className="text-white text-3xl font-bold">{project.title}</h3>
                    <p className="text-white">{project.price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularProject;

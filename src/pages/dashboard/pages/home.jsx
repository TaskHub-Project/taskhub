import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import Footer from "../../../components/footer";

const DashBoardHome = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-around py-12 ">
                <h3 className="text-3xl font-bold" onClick={() => navigate("/")}>TaskHub</h3>

                <div className="space-x-8">
                    
                    <Link to="dashboard/tasks" className="font-semibold">My Tasks</Link>
                    <Link to="dashboard/account" className="font-semibold">Profile</Link>
                    <Link to="dashboard/booktask" className="font-semibold">Notification</Link>
                </div>
            </div>


            <div className="py-11">
                <div className="flex justify-center items-center text-3xl font-bold ">
                    <h2>Schedule Your New Task</h2>
                </div>

                <div className="grid grid-cols-3 gap-8 py-14 mr-5 ml-5" >
                    <Button onClick={() => navigate("/prof")}>Deep Cleaning</Button>
                    <Button onClick={() => navigate("/prof")}>Trash Removal</Button>
                    <Button onClick={() => navigate("/prof")}>Wallpapering</Button>
                    <Button onClick={() => navigate("/prof")}>Interior Painting</Button>
                    <Button onClick={() => navigate("/prof")}>Plumbing Help</Button>
                    <Link to="/more" className="font-semibold">View More</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoardHome;

import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import Footer from "../../../components/footer";

const BookTask = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-around py-12 ">
                <h3 className="text-3xl font-bold" onClick={() => navigate("/")}>TaskerHub</h3>

                <div className="space-x-8">
                    <Link to="/dashboard/booktask" className="font-semibold">Book a Task</Link>
                    <Link to="/dashboard/booktask/tasks" className="font-semibold">My Tasks</Link>
                    <Link to="/dashboard/booktask/account" className="font-semibold">Profile</Link>
                </div>
            </div>


            <div className="py-11">
                <div className="flex justify-center items-center text-3xl font-bold ">
                    <h2>Schedule Your New Task</h2>
                </div>

                <div className="grid grid-cols-3 gap-8 py-14 mr-5 ml-5" onClick={() => navigate("form")}>
                    <Button>Deep Cleaning</Button>
                    <Button>Trash Removal</Button>
                    <Button>Wallpapering</Button>
                    <Button>Interior Painting</Button>
                    <Button>Plumbing Help</Button>
                    <Link to="/service" className="font-semibold">View More</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookTask;

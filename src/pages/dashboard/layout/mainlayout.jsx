
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer";

const MainLayout = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;

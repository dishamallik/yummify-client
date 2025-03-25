import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Home/Shared/Footer/Header/Header";
import Navbar from "../pages/Home/Home/Shared/Navbar/Navbar";
import Scroll from "../Components/Scroll";


const Main = () => {
    return (
        <div>
            <Scroll />
            <Header/>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;
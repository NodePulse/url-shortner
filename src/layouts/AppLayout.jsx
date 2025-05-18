import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen container px-12 mx-auto">
                <Header />
                {/* body */}
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with NodePulse
            </div>
        </div>
    );
};

export default AppLayout;

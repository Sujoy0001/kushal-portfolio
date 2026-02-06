import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModeToggle from "../components/ModeTogle";


export default function Layout1() {
    return (
        <div className="min-h-screen max-w-full flex flex-col mx-auto bg-amber-200">
            <Header />
            <main className="flex-1 w-full mx-auto">
                <Outlet />
            </main>
            <Footer />
            {/* <div className="fixed bottom-4 z-50 mx-auto flex justify-center items-center w-full">
                <ModeToggle />
            </div> */}
        </div>
    );
}
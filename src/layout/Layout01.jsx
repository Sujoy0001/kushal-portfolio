import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout1() {
    return (
        <div className="min-h-screen flex flex-col mx-auto bg-amber-200">
            <Header />
            <main className="grow container mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
import { Outlet } from "react-router"
import { Header } from "../components/generalComponents/Header"

export const LandingPagesLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>

    )
}
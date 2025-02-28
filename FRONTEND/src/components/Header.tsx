import { Link } from "react-router"
import { useAuth } from "../context/AuthContext"

export const Header = () => {
    const { logout } = useAuth();
    return (
        <div className="flex justify-between items-center mb-4 
        border-b-2 border-gray-500 p-6">
            <div>
                <h1>Uni-Insights</h1>
            </div>
            <div className="flex space-x-6">
                <Link to={{
                    pathname: "/university",
                    search: "?query=string",
                    hash: "#hash"
                }}>University</Link>
                <Link to={{
                    pathname: "/courses",
                    search: "?query=string",
                    hash: "#hash"
                }}>Courses</Link>
                <Link to={{
                    pathname: "/community",
                    search: "?query=string",
                    hash: "#hash"
                }}>Community</Link>
                <Link to={{
                    pathname: "/news",
                    search: "?query=string",
                    hash: "#hash"
                }}>News</Link>
                <Link to={{
                    pathname: "/about",
                    search: "?query=string",
                    hash: "#hash"
                }}>About</Link>
            </div>
            <div className="flex space-x-6 items-center">
                <Link to={{ pathname: "/applicationForm" }}>New Application</Link>
                <Link to={{
                    pathname: "/login",
                }} className="btn">Login</Link>
                <Link to={{
                    pathname: "/logout"
                }} className="bg-yellow-400 p-2 rounded-md" onClick={logout}>Logout</Link>
            </div>
        </div>
    )
}
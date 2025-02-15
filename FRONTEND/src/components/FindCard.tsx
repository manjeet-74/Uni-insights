import { Link } from "react-router"

export const FindCard = () => {
    return (
        <div className="mx-6 bg-white mt-16 mb-6 p-4">
            <img src="" alt="" />
            <div>
                <h1>Find a University</h1>
                <p>Search by subject, course or region to find the right course for you.</p>
                <Link to="/#">Get Started </Link>
            </div>
        </div>
    )
}
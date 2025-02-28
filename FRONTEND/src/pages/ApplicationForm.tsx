import { useState } from "react"
import { Header } from "../components/Header"
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useNavigate } from "react-router"
import { applicationSubmit } from "../utils/api"

export const ApplicationForm = () => {
    const navigate = useNavigate();

    const [application, setApplication] = useState({
        title: "",
        description: "",
        studentId: "",
        status: "",
        college: "",
        course: "",
        country: "India",
        city: "",
        date: new Date(),
        deadline: new Date(),
        documents: [],
        comments: [],
        rating: 0,
        feedback: "",
        feedbackDate: new Date(),
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await applicationSubmit(application)
            console.log(res)
            alert("Application submit successful!");
            await navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <Header />
            <div className="p-6 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Application<span className="text-green-700"> Form</span></h1>
                <div className="my-6 border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                    <hr className="w-16 text-green-700" />
                    <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <form className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-6" onSubmit={handleSubmit}>
                        {/* Title  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={application.title}
                                    onChange={(e) => setApplication({ ...application, title: e.target.value })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Description  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    value={application.description}
                                    onChange={(e) => setApplication({ ...application, description: e.target.value })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* status  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="status" className="block text-sm/6 font-medium text-gray-900">
                                Status
                            </label>
                            <div className="mt-2">
                                <input
                                    id="status"
                                    name="status"
                                    type="text"
                                    value={application.status}
                                    onChange={(e) => setApplication({ ...application, status: e.target.value })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* College  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="college" className="block text-sm/6 font-medium text-gray-900">
                                College
                            </label>
                            <div className="mt-2">
                                <input
                                    id="college"
                                    name="college"
                                    type="text"
                                    value={application.college}
                                    onChange={(e) => setApplication({ ...application, college: e.target.value })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Course  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="course" className="block text-sm/6 font-medium text-gray-900">
                                Course
                            </label>
                            <div className="mt-2">
                                <input
                                    id="course"
                                    name="course"
                                    type="text"
                                    value={application.course}
                                    onChange={(e) => setApplication({ ...application, course: e.target.value })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        {/* Country  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                Country
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="country"
                                    name="country"
                                    value={application.country}
                                    onChange={(e) => setApplication({ ...application, country: e.target.value })}
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                    <option>United Kingdom</option>
                                    <option>India</option>
                                    <option>China</option>
                                    <option>Japan</option>
                                    <option>South Korea</option>
                                    <option>Thailand</option>
                                    <option>Philippines</option>
                                    <option>Indonesia</option>
                                    <option>Malaysia</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>


                        {/* City  */}
                        <div className="sm:col-span-3 flex items-center space-x-3">
                            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={application.city}
                                    onChange={(e) => setApplication({ ...application, city: e.target.value })}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <button className="bg-green-500 rounded-2xl font-medium text-white"
                            type="submit"
                        >Submit</button>

                    </form>
                </div>

            </div>
        </div>
    )
}
import { useState } from "react";
import { registerStudent } from "../utils/api";

export default function Register() {
    const [student, setStudent] = useState({ name: "", email: "", password: "" })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await registerStudent(student)
            alert("Register Successful!")
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message)
            }
            alert("Error registering")
        }
    }

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border"
                    onChange={(e) => setStudent({ ...student, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border"
                    onChange={(e) => setStudent({ ...student, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border"
                    onChange={(e) => setStudent({ ...student, password: e.target.value })}
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white">Register</button>
            </form>
        </div>
    )
}
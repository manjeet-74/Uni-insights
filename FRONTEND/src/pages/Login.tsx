import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStudent } from "../utils/api";

export default function LoginPage() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginStudent(credentials)
            alert("Login successful!");
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border"
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border"
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <button type="submit" className="w-full p-2 bg-green-500 text-white">Login</button>
            </form>
        </div>
    );
}

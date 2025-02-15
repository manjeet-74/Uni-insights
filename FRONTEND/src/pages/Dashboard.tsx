import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { dashboard } from "../utils/api";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FindCard } from "../components/FindCard";

export default function Dashboard() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchStudent = async () => {
      try {
        console.log("fetch student")
        const response = await dashboard(token);
        console.log("Response is---------", response)
        if (response.data) {
          setStudent(response.data); // Store the fetched student data
        } else {
          throw new Error("Invalid response format")
        }

      } catch (error) {
        console.error("Error fetching student data:", error);
        console.log("Logging out")
        logout();
        navigate("/login"); // Redirect if unauthorized
      }
    };

    fetchStudent();
  }, [token, navigate]);


  return (
    <div className="px-6">
      <Header />
      <Hero />
      {/* Finding section */}
      <div className="grid grid-cols-3
      bg-[url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
      ">
        <FindCard />
        <FindCard />
        <FindCard />
      </div>
      <div className="max-w mx-auto p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        {student && (
          <div>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <button onClick={logout} className="mt-4 p-2 bg-red-500 text-white">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

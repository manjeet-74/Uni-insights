import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { dashboard } from "../utils/api";
import { Header } from "../components/Header";

export default function Dashboard() {
  const { token, logout } = useAuth();
  console.log("token from dashboard", token);
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
    <div>
      <Header />
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

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { dashboard } from "../utils/api";

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
        const response = await dashboard(token);
        setStudent(response.data); // Store the fetched student data
      } catch (error) {
        console.error("Error fetching student data:", error);
        navigate("/login"); // Redirect if unauthorized
      }
    };
  
    fetchStudent();
  }, [token, navigate]);
  

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {student && (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <button onClick={logout} className="mt-4 p-2 bg-red-500 text-white">Logout</button>
        </div>
      )}
    </div>
  );
}

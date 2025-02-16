import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { dashboard } from "../utils/api";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FindCard } from "../components/FindCard";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";



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
        console.log("Token being sent:", token);
        const response = await dashboard(token);
        // console.log("Response is---------", response)
        if (response.data) {
          setStudent(response.data); // Store the fetched student data
        } else {
          throw new Error("Invalid response format")
        }

      } catch (error) {
        console.error("Error fetching student data:", error);
        // console.log("Logging out")
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
        <FindCard heading="Find a course" para="Search by subject, course or region to find the right course for you." icon={faMagnifyingGlass} />
        <FindCard heading="Find a university" para="Search for universities to find out about courses and more. " icon={faCalendar} />
        <FindCard heading="Find an open day" para="Search and book open days to help you make the right choice." icon={faHouse} />

      </div>
      {/* Top Ranking University  */}
      <TopRankingUniversity />
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

function TopRankingUniversity() {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <h1 className="text-3xl">Top Ranking University</h1>
      <hr className="w-1/16 my-2 bg-yellow-600 h-1.5" />
      <div className="grid grid-cols-3 m-4 gap-6">
        <TopRankCard
          imageLink="https://images.unsplash.com/photo-1593672572837-d1bb82b59370?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          uniName="Stanford University"
        />
        <TopRankCard
          imageLink="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          uniName="Stallion University"
        />
        <TopRankCard
          imageLink="https://plus.unsplash.com/premium_photo-1680807869325-d72663cf7b94?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          uniName="Covenant University"
        />
      </div>
    </div>
  )
}

interface RankCardProps {
  imageLink: string;
  uniName: string;
}

function TopRankCard({ imageLink, uniName }: RankCardProps) {
  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <img src={imageLink} alt={uniName} />
      <h1 className="my-2">{uniName}</h1>
      <a href="">Read More <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
    </div>
  )
}
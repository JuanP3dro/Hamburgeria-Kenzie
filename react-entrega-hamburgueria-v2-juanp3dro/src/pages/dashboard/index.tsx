import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import MainDashboard from "./mainDashboard";
import { StyledDashboard } from "./style";

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      (() => {
       navigate('/')
      })();
    }
  }, []);
  return (
    <StyledDashboard>
      <Header />
      <MainDashboard/>
    </StyledDashboard>
  );
}

export default Dashboard;

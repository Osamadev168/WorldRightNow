import { useContext } from "react";
import { UserContext } from "../Context/Context";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
const Dashboard = () => {
  const { admin } = useContext(UserContext);
  return !admin ? <User /> : <Admin />;
};
const User = () => {
  return <UserDashboard />;
};
const Admin = () => {
  return <AdminDashboard />;
};
export default Dashboard;

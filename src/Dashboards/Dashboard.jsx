import { useContext } from "react";
import { UserContext } from "../Context/Context";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
const Dashboard = () => {
  const { admin, user } = useContext(UserContext);
  return !admin ? <User user={user} admin={admin} /> : <Admin admin={admin} />;
};
const User = ({ user }) => {
  return <UserDashboard user={user} />;
};
const Admin = ({ admin }) => {
  return <AdminDashboard admin={admin} />;
};
export default Dashboard;

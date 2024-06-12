import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layouts() {
  return (
    <div className="Layouts">
      <Navbar />
      <Outlet />
    </div>
  );
}

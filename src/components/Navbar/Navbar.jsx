import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__left"></div>
      <div className="Navbar__logo">
        <Link>
          <img src="./logo.png" alt="" />
        </Link>
      </div>
      <div className="Navbar__right"></div>
    </div>
  );
}

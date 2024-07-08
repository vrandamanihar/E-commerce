import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "sdffsf", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const logoutHandler = () => {
    setIsOpen(false);
  };
  return (
    <nav className="header">
      <h1
        style={{
          margin: "0",
          padding: "0",
          position: "absolute",
          top: "13px",
          left: "50px",
          fontFamily: "Sans-serif",
          animation: "slideIn 1s ease-in-out",
          transition: "all 0.3s ease",
          color: isHovered ? "cyan" : "black",
          // padding: isHovered ? "5px" : "0",
          borderRadius: isHovered ? "5px" : "0",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        TechTreasures
      </h1>
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        HOME
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role == "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}
              <Link onClick={() => setIsOpen(false)} to={"/orders"}>
                Orders
              </Link>

              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;

import { useState } from "react";
import "./navbar.css";

import { TiThMenu } from "react-icons/ti";

const Navbar = ({isSideBar, handleChange}) => {
  const [isOpenText, setIsOpenText] = useState(false);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);

  const closeDropdowns = (e) => {
    if (!e.target.closest(".dropdown")) {
      setIsOpenText(false);
      setIsOpenAvatar(false);
    }
  };

  const handleOpenSidebar = () => {
    handleChange(!isSideBar);
  }

  return (
    <nav className={`navbar position-fixed `} onClick={closeDropdowns}>
      <div className="links">
        <div class="brand-wrapper" onClick={() => handleOpenSidebar()}>
          <div class="brand-name-wrapper gap-2 px-3">
            <TiThMenu className="text-white" />
            <a className="text-white" href="#">
              Admin Portal
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown-container px-5 py-2">
        <div className={`dropdown d-flex gap-3`}>
          <button onClick={() => setIsOpenAvatar(!isOpenAvatar)} className="avatar">
            <img src="https://gravatar.com/avatar/00000000000000000000000000000000?d=mp" alt="Avatar" />
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

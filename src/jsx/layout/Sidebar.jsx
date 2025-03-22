
import "./sidebar.css";

import { TiThMenu } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";

const SideBar = ({ isSideBar, handleChange }) => {
    return (
        <>
            <div className={`${!isSideBar ? "hide" : "msb"}`} id="msb">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="side-menu-container">
                        <ul className="nav navbar-nav pt-3">
                            <li className="mb-3"><a href="/dashboard" >
                                <FaHome className="mr-2" />
                                Dashboard</a></li>
                            <li className="active mb-3"><a href="/posts">
                                <BsFileEarmarkPost className="mr-2" />
                                Posts</a></li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {/* <p>Lo</p> */}
                </div>
            </div>
        </>
    )
}

export default SideBar;
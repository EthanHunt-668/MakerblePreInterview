import css from "./Header.module.css";
import {
  HiDotsVertical,
  HiOutlineLightningBolt,
  HiOutlineMail,
} from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
const Header = () => {
  return (
    <div className={`${css.header} sticky top-0 bg-white`}>
      <div className="flex ">
        <div className="mt-4 ">
          
        
        <a
          href="#"
          className={css.logo_container}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        ><SlMenu /></a>
          <SideBar />
        </div>

        <div className="ml-6 mt-3 w-7">
          
         <Link to={"/"}><img src="./public/makerble_logo.png" /></Link> 
        </div>
        <nav className="flex">
        <select className="p-3"><option>My Apps</option></select>
        <a className="p-3">Explore</a>
        <a className="p-3">Upgrade</a>
        </nav>
      </div>

      <div className="flex p-2">
        <div className="m-2">
          <HiDotsVertical />
        </div>
        <div className="m-2">
          <IoMdNotificationsOutline />
        </div>
        <div className="m-2">
          <HiOutlineMail />
        </div>
        <div className="m-2">
          <HiOutlineLightningBolt />
        </div>
        <div className="m-2">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;

import { GoProjectRoadmap } from "react-icons/go";
import { MdContacts, MdEventNote, MdOutlineSubscriptions, MdPeople } from "react-icons/md";
import css from "./HomeSideBar.module.css";
import ContactCard from "./ContactCard";
import ProjectCard from "./ProjectCard";
import Following from "./Following";
const HomeSideBar = () => {
  return (
    <div className={`${css.sideBar} sticky top-12 bg-white border-4 border-gray`} >
      <div className={css.container}>
        <div >
          <MdEventNote></MdEventNote>
        </div>
        <div className="text-blue-500">Upcoming Event</div>
      </div>
      <div className={css.container} >
        
        <ContactCard/>
      </div>
      <div className={css.container} >
       
        <ProjectCard/>
      </div>
      <div className={css.container} >
        
       <Following/>

      </div>
      
    </div>
  );
};
export default HomeSideBar;

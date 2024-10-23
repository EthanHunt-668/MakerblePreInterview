import { GoProjectRoadmap } from "react-icons/go";
import { MdContacts } from "react-icons/md";

const ProjectCard=()=>{

return (
    <div className="w-full text-blue-500">
    <div className="flex justify-between">
    <div className="flex justify-between">
          <GoProjectRoadmap />
       
          <h5 >Projects</h5>
        </div>
        
        <button className="btn btn-primary p-1 text-xs">+New Project</button>
    </div>
    <hr/>
    <div className="flex">
        <img src="\Makerble_logo.png" className="w-4"/>
        <p className="text-black">Project1</p>
    </div>

    <div className="flex">
        <img src="\Makerble_logo.png" className="w-4"/>
        <p className="text-black">Project2</p>
    </div>

    <div className="flex">
        <img src="\Makerble_logo.png" className="w-4"/>
        <p className="text-black">Project3</p>
    </div>

    </div>
);

}

export default ProjectCard;
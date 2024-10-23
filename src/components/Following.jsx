import { MdPeople } from "react-icons/md";

const Following=()=>{
    return (
        <div className="w-full text-blue-500">
    <div className="flex justify-between">
    <div className="flex ">
   
          <MdPeople />
       
          <h5 >People You Follow</h5>
        </div>
        
        
    </div>
    <hr/>
    <div className="flex overflow-hidden">
        <img src="\Makerble_logo.png" className="w-10 rounded-lg"/>
        <img src="\Makerble_logo.png" className="w-10 rounded-lg"/>
        <img src="\Makerble_logo.png" className="w-10 rounded-lg"/>
        <img src="\Makerble_logo.png" className="w-10 rounded-lg"/>
        <img src="\Makerble_logo.png" className="w-10 rounded-lg"/>
        
    </div>

    </div>
);
}

export default Following;
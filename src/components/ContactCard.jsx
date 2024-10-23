import { MdContacts } from "react-icons/md";

const ContactCard=()=>{

return (
    <div className="w-full text-blue-500">
    <div className="flex justify-between">
    <div className="flex justify-between">
          <MdContacts/>
          <h5 >Contact</h5>
        </div>
        
        <button className="btn btn-primary p-1 text-xs">+New Contact</button>
    </div>
    <hr/>
    <div className="flex">
        <img src="\Makerble_logo.png" className="w-4"/>
        <p className="text-black">Name1</p>
    </div>

    <div className="flex">
        <img src="\Makerble_logo.png" className="w-4"/>
        <p className="text-black">Name1</p>
    </div>

    <div className="flex">
        <img src="\Makerble_logo.png" className="w-4"/>
        <p className="text-black">Name1</p>
    </div>

    </div>
);

}

export default ContactCard;
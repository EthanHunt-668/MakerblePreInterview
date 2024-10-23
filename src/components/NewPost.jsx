import { useRef, useState } from "react";
import css from "./NewPost.module.css";

const NewPost=()=>{

    const [post, setPost]=useState(0);
    const handleOnClick=()=>{
        setPost(1);
    }
    const dateInputRef=useRef(null);
    const handlePost=()=>{
        setPost(0);
    }
    return (
        <>
        {
            post==0?<div className={`${css.inputContainer}`}>
            <input type="text" placeholder="I am feeling Lucky" onClick={handleOnClick}/>
            <button className="btn btn-success">POST</button>
    </div>:<div className="bg-white">
            <div className={css.postHead}>
                <h3 className="font-bold text-blue-500 p-2">Post an Update</h3>
                <div>
                    <button className="btn btn-success mr-2" onClick={handlePost}>Post</button>
                    <button className="btn btn-danger">Cancel</button>
                </div>
            </div>

            <div className="flex p-2 justify-between">
            <img
            className={css.imageContainer} src="\Makerble_logo.png"/>

                   <textarea className={css.inputBox} placeholder="Write the update here..."></textarea>
                   
            </div>
            <div className="flex p-2">
                <label for="Project:" className="font-bold ml-2">Project:</label>
                <select id="Project:" className="w-full border-2 rounded-lg ml-2">
                    <option>Option1</option>
                    <option>Option1</option>
                    <option>Option1</option>
                    <option>Option1</option>
                    <option>Option1</option>
                    <option>Option1</option>
                </select>
                </div>

                <div className="flex justify-between pb-2">
                    <button className="btn btn-secondary w-full ml-4 mr-4">Add Progress</button>
                    <label for="file" className="btn btn-secondary w-full ml-4 mr-4" >Attach</label>
                    <input id="file" type="file" name="Attach" style={{display:"none"}}  />
                    <button className="btn btn-secondary w-full ml-4 mr-4">Location</button>
                    
                    <button className="btn btn-secondary w-full ml-4 mr-4" onClick={()=>{
                     dateInputRef.current.click();
                    }}>Date</button>
                    <input id="date" ref={dateInputRef} type="date" style={{display:"none"}}  />
                 </div>
        </div>
        }
        
        
        </>
    )
}
export default NewPost;
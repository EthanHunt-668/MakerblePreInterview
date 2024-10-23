
import HomeSideBar from "./components/HomeSideBar";
import BodyCards from "./components/BodyCards";

import css from "./Body.module.css"
import NewPost from "./components/NewPost";
const Body=()=>{
    return(
        <div className={css.body}>
            <HomeSideBar/>
           <div> 
            <NewPost/>
            <BodyCards/>
           </div>

        
        </div>
    );
}
export default Body;
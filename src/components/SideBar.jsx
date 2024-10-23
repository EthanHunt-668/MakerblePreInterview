import css from "./sideBar.module.css"
const SideBar=()=>{
    return(
<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className={`offcanvas-header ${css.header}`}>
    <div className={css.idInfo} >
       <img className="w-1/6" alt="id logo" 
        src="\Makerble_logo.png"/>
       <h5 className="text-blue-500 p-2 offcanvas-title " id="offcanvasWithBothOptionsLabel">User Name</h5>
    </div>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div className="offcanvas-body">
    <nav>
    <hr />
      <a className="text-blue-500 pt-10 text-lg">Projects</a><br/>
      <a className="text-blue-500 pt-10 text-lg">Albums</a> <br/>
      <a className="text-blue-500 pt-10 text-lg">Boards</a> <br/>
      <a className="text-blue-500 pt-10 text-lg">Organizations</a> <hr/>    
      <a className="text-blue-500 pt-10 text-lg">Progress</a> <br/>
      <a className="text-blue-500 pt-10 text-lg">Tasks</a> <hr />
      <a className="text-blue-500 pt-10 text-lg">Followers</a> <br/>
      <a className="text-blue-500 pt-10 text-lg">About Us</a> <hr/>
    </nav>
  </div>

</div>

    );
}
export default SideBar;
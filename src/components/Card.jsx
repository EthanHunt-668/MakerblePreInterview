import css from "./Card.module.css";

const Card = () => {

  
  return (
    <div className={`card mb-3 ${css.cardContainer}`}>
      <div className={css.headContainer}>
    <div className="flex">
    <img
            className={css.imageContainer} src="\Makerble_logo.png"/>

            <h4 className="p-2 font-bold">Pranay Anand</h4>
    </div>
      
            <p className={css.timeStamp}>
              1 min ago
            </p>
      </div>
      <hr/>
    <div>
            <p className="card-text mb-2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima ratione dolores, aliquam numquam, modi at provident blanditiis consectetur saepe error aperiam iste asperiores inventore iure voluptatum ad voluptatibus fugiat?
            </p>
          </div>
          <hr/>
          <div className={css.commentContainer}> 
              <input type="text" placeholder="Comment Here..."/>
              <button className="btn btn-primary p-2">Post</button>
          </div>
        </div>
   
  );
};
export default Card;

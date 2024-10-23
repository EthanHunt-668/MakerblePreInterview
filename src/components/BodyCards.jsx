import Card from "./Card";
import css from "./BodyCards.module.css";

import { useEffect, useState } from "react";
import { API_URL } from "../CONSTANTS/constants";
const BodyCards=()=>{

    // const [items,setitems]=useState([]);

    // const promise=async()=>{
    //     const data = await fetch(API_URL);
    //     const {items}= await data.json();
    //     setitems(items);
    //   }
    
    //   useEffect(()=>{
    //     promise();
        
    //   },[]);
    
    return (<div className={css.container}>
        {/* {items.map((videos) => (<Card key={videos.id} videos={videos}/>))} */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>);
}
export default BodyCards;
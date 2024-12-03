import React from "react"; 
import { TbPower } from "react-icons/tb";

import { Link } from "react-router-dom";


const Power = () => { 

   return (
     <>  
      <Link to="/login" ><TbPower style={{ 
           color:"#b37f04",
           marginLeft:"400px", 
           height:"35px", 
           width:"35px", 
           position:"absolute", 
           top:10,
           left:"69%" ,
           cursor:"pointer"
      }}/> </Link>
  
     </>
   ); 

}
export default Power; 
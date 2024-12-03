import React, { useState } from 'react'; 

import Login from './Login.js';


const Webpagebody = () => {  

   const [notifications, setNotifications] = useState([]);

   return (
      <>
        <Login setNotifications={setNotifications} />
      </>
   ); 
}; 
export default Webpagebody; 
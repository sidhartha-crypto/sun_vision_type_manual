import React, { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";


const Notification = ({ notifications }) => {  

    const[Notificationtoggle , setNotificationtoggle] = useState(false); 
    
     const notificationtoggle = () => { 
        setNotificationtoggle(p => !p);
     }; 

     return (
        <>
        <IoIosNotificationsOutline  style={{ 
            color:"grey", 
            height:"35px", 
            width:"35px", 
            marginLeft:"398px", 
            position:"absolute", 
            top:10,
            left:"65%", 
            cursor:"pointer"
        }} onClick={notificationtoggle}/>

        { Notificationtoggle  && 
                
                <div style={{ 

                        border:"1px solid white",
                        height:"300px", 
                        width:"500px", 
                        backgroundColor:"#a67730",
                        position:"absolute", 
                        top:"80px", 
                        left:"67%", 
                        color:"white", 
                        overflowY:"scroll", 
                        overflowX:"hidden" 

                }} 
                >  
                    {notifications && Array.isArray(notifications) && notifications.length === 0 ? (
                     <p>No notifications</p>
                       ) : (
                        notifications && notifications.map((notification, index) => (
                        <div key={index}>{notification}</div>
                           ))
                        )}

                </div> 
            }
        </>
     );
}
export default Notification; 
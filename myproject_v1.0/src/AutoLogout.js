import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoLogout = () => {
  const [timer, setTimer] = useState(null);                                                                                            
  const [inactiveTime, setInactiveTime] = useState(0); 
  const navigation = useNavigate(); 
  
  const resetTimer = () => {
    setInactiveTime(0); 
  };

  useEffect(() => {
   
    const interval = setInterval(() => {
      setInactiveTime(prev => prev + 1);  
    }, 2000);
	
    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    useEffect(() => {
      if (inactiveTime >= 600) { 
       
		 navigation('/login');
         alert('You have been logged out due to inactivity.');
         localStorage.removeItem('user');
         sessionStorage.clear();
      }
    }, [inactiveTime, navigation]);

    return () => {
      clearInterval(interval); 
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);  
      });
    };
  }, [inactiveTime, navigation]);

     return <div>Your session will expire after 10 minutes of inactivity.</div>;
};

export default AutoLogout;
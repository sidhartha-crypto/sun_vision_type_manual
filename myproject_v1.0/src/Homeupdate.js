import React, { useState, useEffect } from 'react';
import Power from './Power.js';
import Notification from './Notification.js';
import Search from './Search.js';
import Leftheader from './Leftheader.js';
import Datecontent from './Datecontent.js';
import { useLocation, useNavigate } from 'react-router-dom';
import "./webpagebody.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./homeupdate.css";

const Homeupdate = () => {
    const [previousDate, setPreviousDate] = useState('');
    const [lastOpenedDate, setLastOpenedDate] = useState(null); 
    const [changename, setNameChange] = useState('');
    const [notifications, setNotifications] = useState([]); 


    const location = useLocation();
    const navigate = useNavigate(); 

    useEffect(() => {
      
        const storedPreviousDate = localStorage.getItem('previousDate');
        const storedLastOpenedDate = localStorage.getItem('lastOpenedDate');
        const storedName = localStorage.getItem('namechange');
        const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];

        if (storedPreviousDate) setPreviousDate(storedPreviousDate);
        if (storedLastOpenedDate) setLastOpenedDate(storedLastOpenedDate); 


        if (storedName) setNameChange(storedName);   
        setNotifications(storedNotifications);


        if (location.state?.name) {
            const newName = location.state.name;
            setNameChange(newName);
            localStorage.setItem('namechange', newName);  
        }

    }, [location.state]);

    const handleButtonClick = () => {
    
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        localStorage.setItem('previousDate', lastOpenedDate);
        localStorage.setItem('lastOpenedDate', formattedDate);
        setPreviousDate(lastOpenedDate);
        setLastOpenedDate(formattedDate);
        navigate('/my/manual'); 
    };
        


    useEffect(()=>{

        const timer = setTimeout(() => {
             
               window.scrollTo(0,0);

           }, 0);

           return  () => clearTimeout(timer);
    },[]); 

  

     const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: '1px solid #ccc',  
        flex: 1,  
      }));  

      
    return (
        <>
              <Helmet>
                <title>Home</title>
              </Helmet>

                <div id="wholecontainerbody">
                <Leftheader onManualClick={handleButtonClick} />
                <Power />
                <Notification notifications={notifications}/>
                <Search />
            <div id="comapnylogo_in_body"></div>
            <div style={{
                height: "200px",
                width: "86.5%",
                marginTop: "-2%",
                marginLeft: "160px",
                border: "1px solid black",
                backgroundColor: "white",
                borderColor: "white",
                paddingLeft: "20px"
            }}>
                <h1 style={{ color: "#eb9c4d" }}>Hello {changename || 'User' }</h1><br/>
                <h5><Datecontent /></h5>
            </div>
            <br />

            <h1 style={{
                marginLeft: "160px",
                fontSize: "25px",
                color: "#eb9c4d",
                textTransform: "uppercase"
            }} id="Your manual">
                <p style={{ color: "#807f7d", display: 'inline-block' }}>Your</p>&nbsp;manual
            </h1>

            <div
                style={{
                    height: "150px",
                    width: "35%",
                    marginTop: "2%",
                    marginLeft: "160px",
                    border: "1px solid black",
                    backgroundColor: "white",
                    borderColor: "white",
                    boxShadow: "5px 5px 5px grey",
                    cursor: "pointer",
                    paddingTop: "20px",
                    paddingLeft: "20px" 
                }}
                onClick={handleButtonClick}  id="pg"
            >
                <h4>Inovaantage Manual Entry</h4>
                <h6>
                    <div>
                        <h5 style={{ fontSize:"15px" , color:"#eb9c4d" }}>Current Date: {lastOpenedDate || 'please wait......'}</h5>
                        <br></br>
                        <div>
                        <ProgressBar animated  striped variant="warning"  now={50}  style={{ 
                                                   width: '90%',             
                                                  marginTop:"-9px",   
                                                       
                        }}/>  
                        </div>

                    </div>
                </h6>
            </div>

            <h5 style={{
                marginLeft: "160px",
                marginTop: "50px",
                textTransform: "uppercase",
                fontSize: "25px",
                color: "#807f7d"
            }} id="Video library"> Video <p style={{ color: "#eb9c4d", display: "inline-block" }}>library</p></h5> 
 
      <Box sx={{ display: 'flex', height: '450px' , marginLeft:"160px" , columnGap:"10px" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 , rowGap:"10px" }}>
        <Item>ELECTRIC CONTRACTOR
        <img  src='../best-electrical-contractor-software.png' height={220} width={300} alt=''/> 
        </Item>
        <Item>GAS CONTRACTOR
        <img  src='../istockphoto-1271606275-612x612.jpg' height={220} width={300} alt=''/> 
        </Item>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 ,  rowGap:"10px" }}>
        <Item>TRANSMISSION PLANNING(TPL)
        <img  src='../istockphoto-1714364123-612x612.jpg' height={220} width={300} alt=''/> 
        </Item>
        <Item>LANDBASE MEA
        <img  src='../1-8-2.jpg' height={220} width={300} alt='' /> 
        </Item>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 ,  rowGap:"10px" }}>
        <Item>ELECTRIC MEA
        <img  src='../electric_mea.jpg' height={220} width={300} alt='' /> 
        </Item>
        <Item>MEA GAS
        <img  src='../istockphoto-1271606275-612x612.jpg' height={220} width={300} alt=''/> 
        </Item>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 ,  rowGap:"10px" ,  marginTop:"42.7%" , position:"relative" , left:"-76%" , height: '220px' }}>
        <Item>ELECTRICITY LV 
        <img  src='../electric_mea.jpg' height={220} width={300} alt='' /> 
        </Item>
        <Item>PLAN REQUEST MEA
        <img  src='../plan.png' height={220} width={300} alt=''/> 
        </Item>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 ,  rowGap:"10px" ,  marginTop:"42.7%" , position:"relative" , left:"-50.5%" , height: '220px'}}>
        <Item>MEA SLD
        <img  src='../sld.png' height={220} width={300} alt=''/> 
        </Item>
      </Box>
      <br/>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 ,  rowGap:"10px" , marginTop:"42.7%" , position:"relative" , left:"-101.8%" , height: '220px' }}>
        <Item>ELECTRIC EDITING
        <img  src='../best-electrical-contractor-software.png' height={220} width={300} alt=''/> 
        </Item>
        <Item>ELECTRIC EXISTING
        <img  src='../electric_mea.jpg' height={220} width={300} alt='' /> 
        </Item>
      </Box>
     </Box>
     </div>

      

     <div id="policy">
           Terms and conditions&nbsp;&nbsp;|&nbsp;&nbsp;Privacy policy&nbsp;&nbsp;|&nbsp;&nbsp;info@inovaantage.com 
    </div>
     </>
    );
}; 
export default Homeupdate;
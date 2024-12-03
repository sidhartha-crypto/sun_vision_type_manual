import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./report.css";
import Page from './Page.js';
import Gaspage from './Gaspage.js';
import Tplpage from './Tplpage.js';
import Landbasemeapage from './Landbasemeapage.js';
import Meagaspage from './Meagaspage.js';
import Electriclvpage from './Electriclvpage.js';
import Planrequestmeapage from './Planrequestmeapage.js';
import Measldpage from './Measldpage.js';
import Electricexistingpage from './Electricexistingpage.js';
import Electriceditingpage from './Electriceditingpage.js';
import { IoIosArrowForward } from "react-icons/io";


const Manual = () => {

    const name1_endpoint = "elec_con";
    const name2_endpoint = "gas_con"; 
    const name3_endpoint = "tpl"; 
    const name4_endpoint = "landbase"; 
    const name5_endpoint = "elec_mea"; 
    const name6_endpoint = "mea_gas";
    const name7_endpoint = "elec_lv";
    const name8_endpoint = "plan_r_mea"; 
    const name9_endpoint = "mea_sld"; 
    const name10_endpoint = "electric_existing";
    const name11_endpoint = "electric_editing";

    const elec_con_endpoint = `/my/manual/name=${name1_endpoint}`;
    const gas_con_endpoint = `/my/manual/name=${name2_endpoint}`;
    const tpl_endpoint = `/my/manual/name=${name3_endpoint}`; 
    const LandBase_endpoint = `/my/manual/name=${name4_endpoint}`; 
    const electric_mea_endpoint = `/my/manual/name=${name5_endpoint}`; 
    const mea_gas_endpoint = `/my/manual/name=${name6_endpoint}`;
    const Electricity_lv_endpoint = `/my/manual/name=${name7_endpoint}` ;
    const plan_r_mea_endpoint = `/my/manual/name=${name8_endpoint}`; 
    const mea_sld_endpoint = `/my/manual/name=${name9_endpoint}`; 
    const electric_existing_endpoint = `/my/manual/name=${name10_endpoint}`; 
    const electric_editing_endpoint = `/my/manual/name=${name11_endpoint}`; 

         const[videos,setVideos] = useState(false);   

         const handlevideo = () => { 

               setVideos((src) => !src); 
         }
 
          const[electriccontractortoggle , setElectriccontractortoggle] = useState(false);
          const[gasconstractortoggle , setGascontractortoggle] = useState(false); 
          const[tpltoggle , setTpltoggle] = useState(false); 
          const[landbasemeatoggle , setLandbasemeatoggle] = useState(false);  
          const[meagastoggle , setMeagastoggle] = useState(false); 
          const[electriclvtoggle , setElectriclvtoggle] = useState(false);
          const[planreqmeatoggle , setPlanreqtoggle] = useState(false); 
          const[measldtoggle , setMeasldtoggle] = useState(false);
          const[electricexistingtoggle , setElecricexistingtoggle] = useState(false);  
          const[electriceditingtoggle , setElectriceditingtoggle] = useState(false);

          const hnadleelectriccontractortoggle = () => { 

              setElectriccontractortoggle((elec_con_prev) => !elec_con_prev); 

          }; 
         const handlegascontactortoggle = () => { 

              setGascontractortoggle((gas_con_prev) => !gas_con_prev);

         }; 
         const handletpltoggle = () => { 

            setTpltoggle((tpl_prev) => !tpl_prev);
         }; 

         const handlelandbasetoggle = () => { 

            setLandbasemeatoggle((landbase_prev) => !landbase_prev);
         };

         const handlemeagastoggle = () => { 

            setMeagastoggle((meagas_prev) => !meagas_prev);

         };  

        const handleelectriclvtoggle = () => { 

             setElectriclvtoggle((electric_lv_prev) => !electric_lv_prev);
          
        };  


        const handleplanreqtoggle = () => {

            setPlanreqtoggle((plan_req_prev) => !plan_req_prev);

        }; 


        const handlemeasldtoggle = () => { 

            setMeasldtoggle((mea_sld_prev) => !mea_sld_prev);

        }; 

        const handleelectricexistingtoggle = () => { 

            setElecricexistingtoggle((electric_existing_prev) => !electric_existing_prev);

        }; 

       const handleelectriceditingtoggle = () => { 

        setElectriceditingtoggle((electric_editing_prev) => !electric_editing_prev);

       };  

       const[electriccontractorvideo , setElectriccontractorvideo] = useState(false); 
       
       
       const electriccon = () => { 
           setElectriccontractorvideo((src) => !src); 
       }; 

    return (

       <>

       <Helmet>
        <title>Modules list</title> 
       </Helmet>

        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', paddingBottom: '6%' }}>
            
            <div
                style={{
                    border: "1px solid black", 
                    backgroundColor: "#eb9c4d", 
                    width: "100%", 
                    height: "150px", 
                    margin: "0 auto", 
                    borderColor: "#eb9c4d",
                    boxShadow: "20px 20px 20px 5px rgba(0, 0, 0, 0.5)", 
                    position: 'relative', 
                    marginTop:"-1.3%"
                }}
            >
                             <div id="companylogo" style={{ backgroundColor:"white" , height:"50px" , marginLeft:"30px" }}></div>
            </div>

               <div style={{ marginTop: '60px' , border:"1px solid white" , overflowY:"scroll" , overflowX:"hidden" , width:"450px" , height:"450px" }}>

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                    <p onClick={electriccon} style={{ textDecoration:"none" , color:"black" }}><Link to={elec_con_endpoint} style={{ 

                             textDecoration:"none", 
                             color:"black"

                        }} onClick={hnadleelectriccontractortoggle}><IoIosArrowForward/>&nbsp;&nbsp;Electric Contractor</Link></p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                        </Typography>
                    </AccordionDetails>
                </Accordion> 

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={gas_con_endpoint}  style={{ 

                             textDecoration:"none", 
                             color:"black"

                    }} onClick={handlegascontactortoggle}><IoIosArrowForward/>&nbsp;&nbsp;Gas contractor</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
        

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={tpl_endpoint} style={{ 

                                 textDecoration:"none", 
                                 color:"black"

                      }} onClick={handletpltoggle}><IoIosArrowForward/>&nbsp;&nbsp;Transmission Planning (TPL)</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 


                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={LandBase_endpoint} style={{ 

                                      textDecoration:"none", 
                                      color:"black"

                           }} onClick={handlelandbasetoggle}><IoIosArrowForward/>&nbsp;&nbsp;LandBase MEA</Link> 
                    </AccordionSummary>
                    <AccordionDetails>   
                    <Typography> 


                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                     <Link to={electric_mea_endpoint} style={{ 

                                         textDecoration:"none", 
                                         color:"black"

                        }}  onClick={handlevideo} ><IoIosArrowForward/>&nbsp;&nbsp;Electric MEA</Link> 
                    </AccordionSummary>
                    <AccordionDetails style={{ height:"10px" }}>
            
                    </AccordionDetails>
                </Accordion>


                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={mea_gas_endpoint} style={{ 
                                       
                             textDecoration:"none", 
                             color:"black"


                           }} onClick={handlemeagastoggle}><IoIosArrowForward/>&nbsp;&nbsp;MEA Gas</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={Electricity_lv_endpoint} style={{ 

                                       textDecoration:"none", 
                                       color:"black"

                          }} onClick={handleelectriclvtoggle}><IoIosArrowForward/>&nbsp;&nbsp;Electricity LV</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 

                        </Typography>
                    </AccordionDetails>
                </Accordion>

              
                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={plan_r_mea_endpoint} style={{ 

                                       textDecoration:"none", 
                                       color:"black"

                        }} onClick={handleplanreqtoggle}><IoIosArrowForward/>&nbsp;&nbsp;Plan Request MEA</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 

                        </Typography>
                    </AccordionDetails>
                </Accordion>
  
               
                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={mea_sld_endpoint} style={{ 

                                        textDecoration:"none", 
                                        color:"black"

                          }} onClick={handlemeasldtoggle}><IoIosArrowForward/>&nbsp;&nbsp;MEA SLD</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={electric_existing_endpoint} style={{ 

                                        textDecoration:"none", 
                                        color:"black"

                          }} onClick={handleelectricexistingtoggle}><IoIosArrowForward/>&nbsp;&nbsp;Electric Existing</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{ width: '500px' }}>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Link to={electric_editing_endpoint} style={{ 

                                        textDecoration:"none", 
                                        color:"black"

                          }} onClick={handleelectriceditingtoggle}><IoIosArrowForward/>&nbsp;&nbsp;Electric editing</Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography> 

                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

          
          <div id="module_content" style={{
                   marginTop:"60px"
          }}>
          
             {electriccontractortoggle && (   
                                      <Page/>          
             )}  

             {gasconstractortoggle && (
                                    <Gaspage/> 
              )} 

             {tpltoggle && (
                                    <Tplpage/>            
             )}

            {landbasemeatoggle && (

                                  <Landbasemeapage/>
             )}

            {meagastoggle && (
                                   <Meagaspage/>
             )}

            {electriclvtoggle && (   
                                  <Electriclvpage/>
                 )}

                          {planreqmeatoggle && (
                                        <Planrequestmeapage/>
                          )}


                {measldtoggle && (
  
                                       <Measldpage/>
                )}

               {electricexistingtoggle && (

                                     
                                     <Electricexistingpage/>
               )}

               {electriceditingtoggle && (

                                     <Electriceditingpage/>

               )}


                    <div style={{ 
                            
                            position:"absolute", 
                            left:"56%", 
                            top:"30%"
                    }} > 

                    {videos && <video src="/mea_electric.mp4" height={400} width={400} controls></video> }

                    </div>

                <div style={{ 
          
                        position:"absolute", 
                        left:"56%", 
                        top:"30%" 
                }}>
                {electriccontractorvideo && <video src="/InShot_20241011_150826378 (1).mp4" height={400} width={400} controls></video> }
               </div>
           </div>
        </div>
      </>
    );
};
export default Manual;
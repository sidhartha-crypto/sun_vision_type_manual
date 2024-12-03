import React from 'react';
import Login from './Login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Webpagebody from './Webpagebody.js';
import Home from './Home.js';
import Report from './Report.js';
import Manual from './Manual.js';
import Errorhandler from './Errorhandler.js';

function App()  
{

       const route_name1_endpoint = "elec_con";
       const route_name2_endpoint = "gas_con"; 
       const route_name3_endpoint = "tpl"; 
       const route_name4_endpoint = "landbase";
       const route_name5_endpoint = "elec_mea"; 
       const route_name6_endpoint = "mea_gas";
       const route_name7_endpoint = "elec_lv"; 
       const route_name8_endpoint = "plan_r_mea";
       const route_name9_endpoint = "mea_sld";
       const route_name10_endpoint = "electric_existing"; 
       const route_name11_endpoint = "electric_editing"; 
       const login = "login"; 

       const route_electric_con_endpoint = `/my/manual/name=${route_name1_endpoint}`; 
       const route_gas_con_endpoint = `/my/manual/name=${route_name2_endpoint}`;
       const route_tpl_endpoint = `/my/manual/name=${route_name3_endpoint}`; 
       const route_landbase_endpoint = `/my/manual/name=${route_name4_endpoint}`; 
       const route_elec_mea_endpoint = `/my/manual/name=${route_name5_endpoint}`;  
       const route_mea_gas_endpoint = `/my/manual/name=${route_name6_endpoint}`;  
       const route_elec_lv_endpoint =  `/my/manual/name=${route_name7_endpoint}`;  
       const route_plan_req_endpoint =  `/my/manual/name=${route_name8_endpoint}`; 
       const route_mea_sld_endpoint = `/my/manual/name=${route_name9_endpoint}`; 
       const route_electric_existing_endpoint = `/my/manual/name=${route_name10_endpoint}`; 
       const route_electric_editing_endpoint = `/my/manual/name=${route_name11_endpoint}`; 
       const route_log = `/${login}`;
      

  return (
    <>
        <BrowserRouter>
        <Routes> 

        <Route path="" element={<Webpagebody />} /> 
        <Route path="/my/home" element={<Home/>} />
        <Route path="/my/report" element={<Report/>} />
        <Route path="/my/report/download" element={<Report/>}/>
        <Route path="/my/manual"  element= {<Manual/>}/>
        <Route path={route_electric_con_endpoint}  element= {<Manual/>}/>
        <Route path={route_gas_con_endpoint}  element= {<Manual/>}/>
        <Route path={route_tpl_endpoint}  element= {<Manual/>}/>
        <Route path={route_landbase_endpoint}  element= {<Manual/>}/>
        <Route path={route_elec_mea_endpoint}  element= {<Manual/>}/>
        <Route path={route_mea_gas_endpoint}  element= {<Manual/>}/>
        <Route path={route_elec_lv_endpoint}  element= {<Manual/>}/>
        <Route path={route_plan_req_endpoint}  element= {<Manual/>}/>
        <Route path={route_mea_sld_endpoint}  element= {<Manual/>}/>
        <Route path={route_electric_existing_endpoint} element={<Manual/>}/> 
        <Route path={route_electric_editing_endpoint}  element={<Manual/>} />  
        <Route path={route_log} element={<Login/>} /> 
        <Route path="*" element={<Errorhandler />} />
      
       </Routes>
       </BrowserRouter>

    </>
  );
} 
export default App; 
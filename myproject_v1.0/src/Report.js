import React, { useEffect, useState, useRef } from 'react';
import Leftheader from './Leftheader.js';
import Power from './Power.js';
import Notification from './Notification.js';
import Search from './Search.js';
import "./webpagebody.css";
import "./report.css";
import ApexChart from './ApexChart';   
import { Link } from 'react-router-dom'; 
import { FaAnglesDown } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import { useDownloadExcel } from 'react-export-table-to-excel';


const Report = () => {
    const redirect_home_url = "home";
    const redirect_report_url = "report";

    const redirect_home = `/my/${redirect_home_url}`; 
    const redirect_report = `/my/${redirect_report_url}`;

    const [filebordertype, setfilebordertype] = useState(false);

    const [notifications, setNotifications] = useState([]); 
    
    useEffect(() => {
        const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
        setNotifications(storedNotifications);
    }, []); 

    const Fileborderstyle = () => { 
        setfilebordertype(p => !p);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        
        return () => clearTimeout(timer);
    }, []);

    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'My Report',
        sheet: 'report'
    });

    return (
        <>
            <Helmet>
                <title>My results</title>
            </Helmet>
            
            <div id="wholecontainer">
                <Leftheader />
                <Power />
                <Notification notifications={notifications}/>
                <Search />
                <div id="companylogo"></div>

                <div style={{ 
                    border: "1px solid white", 
                    width: "89%", 
                    height: "500%", 
                    backgroundColor: "white", 
                    marginLeft: "164px"
                }}>
                    <div style={{ paddingLeft: "20px", paddingTop: "20px" }}> 
                        <Link to={redirect_home} style={{ textDecoration: "none", color: "black" }}>
                            Dashboard
                        </Link>
                        &nbsp;/&nbsp;
                        <Link to={redirect_report} style={{ textDecoration: "none", color: "black" }}>
                            My results
                        </Link>  
                        <br />
                        <h3 style={{ paddingTop: "5px", color: "#807f7d" }}>My results</h3>
                        <br />
                        <div style={{ 
                            border: "0.5px solid #d2d4d6", 
                            width: "100%", 
                            borderColor: "#d2d4d6"
                        }}></div>

                        <div
                            style={{
                                height: "350px",
                                width: "50%",
                                marginTop: "2%",
                                marginLeft: "10px",
                                border: "1px solid black",
                                backgroundColor: "white",
                                borderColor: "white",
                                boxShadow: "5px 5px 5px grey",
                                cursor: "pointer",
                                paddingTop: "20px",
                                paddingLeft: "20px" 
                            }}
                        >
                            <h4 style={{ 
                                backgroundColor: "#e3e3e3",
                                paddingLeft: "10px", 
                                paddingTop: "10px", 
                                paddingBottom: "10px", 
                                color: "#808080"
                            }}>
                                Company Zone Statistics
                            </h4>

                            <div style={{ height: "100%", width: "100%" }}>
                                <ApexChart />
                            </div>
                        </div>

                        <br/>
                        <button id="downloadreport" onClick={Fileborderstyle}>
                            <FaAnglesDown style={{ fontSize: "14px" }} />
                            &nbsp;&nbsp;Download the report
                        </button> 

                        {filebordertype && (
                            <div style={{
                                border: "1px solid white", 
                                height: "50px",
                                width: "200px", 
                                marginLeft: "82%", 
                                backgroundColor: "#eb9c4d",
                                marginTop: "5px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start"
                            }}>
                                <a href='#' style={{ textDecoration: "none" }}>
                                    <li id="csv" >CSV</li>
                                </a>
                                <Link to='/my/report/download' style={{ textDecoration: "none" }} onClick={onDownload}>
                                    <li id="xls">XLS</li>
                                </Link>
                            </div>
                        )}
                    </div>

                    <table className="table table-bordered border-warning" style={{ 
                        width: "94.9%", 
                        marginLeft: "35px", 
                        marginTop: "67px"
                    }} ref={tableRef}>
                        <thead>
                            <tr>
                                <th scope="col">Lp.</th>
                                <th scope="col">Module Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Time completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>null</td>
                                <td>null</td>
                                <td>null</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>null</td>
                                <td>null</td>
                                <td>null</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>null</td>
                                <td>null</td>
                                <td>null</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Report;
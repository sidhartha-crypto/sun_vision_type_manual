import React from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiSolidReport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Leftheader = ({ onManualClick }) => {
    const border = {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh", 
        width: "90px",
        backgroundColor: "#eb9c4d",
        borderColor: "#eb9c4d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px", 
        boxSizing: "border-box" 
    };

    const Liststyle = {
        listStyle: "none",
        padding: 0,
        margin: 0,
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        textAlign: "center",
    };

    const pastyle = {
        paddingBottom: "30px",
    };

    return (
        <div style={border}>
            <div style={Liststyle}>
            <Link to="/my/home" style={{ textDecoration: "none", color: "white" }}>
                <RiHomeSmileFill style={{ fontSize: "34px" }} />
                <div style={pastyle}>Home</div>
            </Link>

            <Link to="/my/manual" style={{ textDecoration: "none", color: "white" }} onClick={onManualClick}>
                <TfiMenuAlt style={{ fontSize: "34px" }} />
                <div style={pastyle}>Manual</div>
            </Link>

            <Link to="/my/report" style={{ textDecoration: "none", color: "white" }}>
                <BiSolidReport style={{ fontSize: "34px" }} />
                <div style={pastyle}>Report</div>
            </Link>
            </div>
        </div>
    );
};

export default Leftheader;
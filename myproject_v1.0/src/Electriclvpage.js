import React, { useState } from 'react';
import Electriclv from './Electriclv.js';

const Electriclvpage = () => {

    const itemsPerPage = 1; 
    const totalItems = 5; 
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);

  
    const handlePageDisplay = () => {
        return <Electriclv page={currentPage} />;
    }; 

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <>
            <div style={{
                border: "1px solid white",
                width: "240mm",
                height: "240mm",
                marginTop: "-29%",
                marginLeft: "36%",
                backgroundColor: "white",
                padding: "20px",
                marginTop:"-33.5%"
            }}>
                {handlePageDisplay()}
            </div>

            <br/>

            <div style={{ marginLeft: "64%" }}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                &nbsp;&nbsp;
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </>
    );
};

export default Electriclvpage;
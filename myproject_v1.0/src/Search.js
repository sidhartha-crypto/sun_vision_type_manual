import React, { useState } from 'react'; 
import { IoSearchOutline } from "react-icons/io5";

const Search = () => { 
    const [searchToggle, setSearchToggle] = useState(false);
    const [closeBorder, setCloseBorder] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchToggle = () => {    
        setSearchToggle(prev => !prev);
        if (!searchToggle) {
            setCloseBorder(true); 
        } else {
            setCloseBorder(false); 
        }
    };

    const FindElement = () => { 
        const filter = searchQuery.toLowerCase().trim();
        const elementIds = [
            "Your manual", 
            "Video library"
        ];       

        elementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const txtValue = element.textContent || element.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    element.style.backgroundColor = "yellow";  
                    element.style.display = "block";  
                    element.style.width = "200px"; 
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });  
                } else {
                    element.style.display = "none"; 
                }
            } 
        });
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        FindElement(); 
    };

    return ( 
        <>
            <IoSearchOutline 
                style={{  
                    color: "#b4b5b3", 
                    height: "35px", 
                    width: "35px", 
                    marginLeft: "398px", 
                    position: "absolute", 
                    top: 10,
                    left: "61%", 
                    cursor: "pointer"
                }}  
                onClick={handleSearchToggle} 
            />

            {searchToggle && (
                <div 
                    style={{       
                        border: "1px solid white",
                        height: "50px", 
                        width: "60%", 
                        backgroundColor: "white",
                        position: "absolute", 
                        top: "10px", 
                        left: "30%", 
                        cursor: "pointer"
                    }} 
                    onClick={() => setCloseBorder(true)} 
                >
                    {closeBorder && (
                        <input 
                            type='search' 
                            placeholder="Search..." 
                            id="myInput"
                            style={{ width: "100%", height: "100%", border: "none", outline: "none" }} 
                            value={searchQuery}
                            onChange={handleInputChange}  
                        />
                    )} 
                </div>
            )}
        </>
    ); 
}

export default Search;
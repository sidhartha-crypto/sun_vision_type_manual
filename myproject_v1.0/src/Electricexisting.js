import React from 'react'; 

const Electricexisting = ({ page }) => {

  return (

      <>
       {page === 1 && (

         <div>
            electric existing 1 
        </div>      

       )}
      
       {page === 2 && (
          <div>
             electric existing 2 
          </div> 
      
       )}

       {page === 3 && (
          <div>
             electric existing 3 
          </div> 
      
       )}

      </>
  ); 

}; 
export default Electricexisting;
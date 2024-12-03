import React from 'react';

const Landbasemea = ({ page }) =>  { 
 
    return (
        <>
         {page === 1 && (

                    <div>
                        landbase MEA P1
                    </div>       

         )}
         {page === 2 && (

                    <div>
                         landbase mea p2
                    </div>        
          )}
        
        </>

    ); 

}; 
export default Landbasemea; 
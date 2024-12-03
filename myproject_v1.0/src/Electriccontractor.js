import React from 'react';


const Electriccontractor = ({ page }) => { 

  return (
    <>
      {page === 1 && (
        <div>
         Good moring
        </div>
      )}
      {page === 2 && (
        <div>
          hello
          hii
        </div>
      )}
      {page === 3 &&(

         <div>
            bye 
            tata 
         </div>

      )}
    </>
  );
};

export default Electriccontractor;
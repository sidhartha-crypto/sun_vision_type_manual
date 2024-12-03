import React from 'react';

const Meagas = ({  page  }) => { 

  return (
  <>
   {page === 1 && (
  
    <div>
        mea gas 1
    </div>

   )}
   {page === 2 && (

     <div>
        mea gas 2 
    </div>

   )}
   {page === 3 && (

     <div>
        mea gas 3
    </div>
    )}
  
  </>

  );

}; 
export default Meagas; 
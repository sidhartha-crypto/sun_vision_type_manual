import React from 'react';

const Electriclv = ({ page }) => { 

 return (

 <>
  {page === 1 && (

   <div>
    electric lv 1 
   </div>

  )}
{page === 2 && (

<div>
 electric lv 2 
</div>

)}
{page === 3 && (

<div>
 electric lv 3 
</div>

)}
{page === 4 && (

<div>
 electric lv 4 
</div>

)}
 </>
 ); 
}; 
export default Electriclv; 
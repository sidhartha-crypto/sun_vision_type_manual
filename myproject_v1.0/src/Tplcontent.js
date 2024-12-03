import React from 'react';

const Tplcontent = ({  page  }) => {

  return (
   <>
   {page === 1 && (
 
     <h1>PAGE 1</h1>

   )}
   {page === 2 && (
 
     <h1>PAGE 2</h1>

   )} 
   {page === 3 && (
 
     <h1>PAGE 3</h1>

    )} 

{page === 4 && (
 
 <h1>PAGE 4</h1>

)} 

{page === 5 && (
 
 <h1>PAGE 5</h1>

)} 
   </>
  ); 

}; 
export default Tplcontent; 
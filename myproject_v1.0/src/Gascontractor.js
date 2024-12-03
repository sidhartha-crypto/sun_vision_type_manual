import React from 'react';

const Gascontractor = ({ page }) => { 

     const ai = () => {

           const gas = "I'm listening......";

           const voice = new SpeechSynthesisUtterance(gas);

            window.speechSynthesis.speak(voice);
     }

     return (
      <>
       
       {page === 1 && (

            <>
          1     
            </>

       )}

{page === 2 && (

<>
2     
</>

)}

{page === 3 && (

<>
3   
</>

)}
{page === 4 && (

<>
4
</>

)}
{page === 5 && (

<>
5
</>

)}
{page === 6 && (

<>
6
</>

)}
{page === 7 && (

<>
7
</>

)}
{page === 8 && (

<>
8
</>

)}
{page === 9 && (

<>
9
</>

)}
{page === 10 && (

<>
10  
</>

)}


      </>
     ); 

}
export default Gascontractor; 
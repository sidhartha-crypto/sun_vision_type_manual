const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../Runtime.log');

const logRuntimeInfo = () => 
  { 
 
  const currentdate = new Date();
  const name = "INFO";
  
  const logMessage = `Application started at: [${name}] ${currentdate.toLocaleString()}\n`;  

  const fulllogfilelist = logMessage; 

  fs.appendFile(logFilePath, fulllogfilelist, (err) => {
    if (err) {
      console.error('Error writing to log file from front-end:', err);  
    } else {
      console.log(`Runtime information logged from front-end.`);
    }
  });
};

logRuntimeInfo();
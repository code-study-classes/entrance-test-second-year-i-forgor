// import { fileURLToPath } from 'url'; //фенкция получает путь к файлу  
// import path from 'path'; 
import fs from 'fs'; 
import getPath from './get-path.js'; 
// import readlineSync from 'readline-sync'; 
// import reader from './file-reader.js'; 
 
 
const update = (fPath, pattern) => { 
    const filPath = getPath(fPath); 
    fs.appendFileSync(filPath, pattern, 'utf-8'); 
    return true; 
} 
 
export default update;
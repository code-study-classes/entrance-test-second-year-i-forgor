import updater from '../file-updater.js'; 
import getId from '../getters/get-id.js'; 
import readlineSync from 'readline-sync'; 
import reader from '../file-reader.js' 
 
const newHotel  = readlineSync.question('New hotel: ').toLowerCase().trim(); 
const id = getId('data/hotel.csv'); 
const newRegion = readlineSync.question(`Hotel's region: `).toLowerCase().trim(); 
 
const regions = reader('data/rgions.csv').split('\n'); 
const regionId = regions.filter((string) => { 
    const [, name] = string.split (';');
    //console.log(id, name);
    return name === newRegion ? true : false;
}).at(0).split(';').at(0);
// (string) => string.split(';').at(1) === newRegion
console.log(regionId);
updater('data/hotel.csv', `\n${id};${newHotel};${regionId}`);
//data from regions (str) -> ['id;name', 'id;name2'] -> ['id', 'name']
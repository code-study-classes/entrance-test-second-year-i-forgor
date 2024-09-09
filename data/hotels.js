import region from './regions.js'
import fs from 'fs'
const hotel = [];
const setHotel = (name, regionName) => {
    const regionId = region.filter((obj) => obj.name === regionName)[0].id;
    hotel.push({
        name, 
        regionId
    })
    return hotel[0];
};
//setHotel('iop', 'center');
// fs.open('./result.json');
// fs.writeFileSync('./data/result.json', JSON.stringify(setHotel('iop', 'center')));
fs.writeFileSync('./data/hotels.json', JSON.stringify(setHotel('kek', 'parnas')));
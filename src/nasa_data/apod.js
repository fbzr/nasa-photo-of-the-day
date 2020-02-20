import axios from 'axios';
// import functions from '../functions';
// import dummyData from './dummyData';

function getData(date=new Date()) {
    // Test
    console.log('it getting data');
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    return axios.get(url);
    // return axios.get(`https://api.nasa.gov/planetary/apod?api_key=VPDBBijjACBup4d37wNWuMYSbCnepqynSIHPVGOm&date=${functions.convertToUniversalDate(date)}`);
}

export default { getData }
import axios from 'axios';
import functions from '../functions';
import dummyData from './dummyData';

function getData(date=new Date()) {
    console.log('it getting data');
    // Test
    // return dummyData;
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=VPDBBijjACBup4d37wNWuMYSbCnepqynSIHPVGOm&date=${functions.convertToUniversalDate(date)}`);
}

export default { getData }
import axios from 'axios';
import functions from '../functions';

function getData(date=new Date()) {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=VPDBBijjACBup4d37wNWuMYSbCnepqynSIHPVGOm&date=${functions.convertToUniversalDate(date)}`);
}

export default { getData }
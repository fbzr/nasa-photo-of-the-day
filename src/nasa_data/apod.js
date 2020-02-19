import axios from 'axios';

function getData() {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=VPDBBijjACBup4d37wNWuMYSbCnepqynSIHPVGOm');
}

export default { getData }
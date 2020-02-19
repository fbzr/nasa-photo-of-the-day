import axios from 'axios';

export default async function fetchData() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=VPDBBijjACBup4d37wNWuMYSbCnepqynSIHPVGOm');
    console.log(res);
}
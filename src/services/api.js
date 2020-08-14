import axios from 'axios';

axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com"
});

/*
const api = () => {
    return fetch("https://api.cartolafc.globo.com")
    .then( (response) => response.json )
}
*/
export default api
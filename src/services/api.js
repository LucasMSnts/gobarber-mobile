import axios from 'axios';

// Genymotion: 10.0.3.2
// Via usb: ip do dispositivo

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333' // android studio
});

export default api;

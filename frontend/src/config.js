// const BASE_URL = 'http://localhost:3000';


// conditional type 
const BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000' // local backend URL
    : 'https://collegeproject-5vpp.onrender.com'; // actual backend URL aayega

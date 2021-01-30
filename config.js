require('dotenv').config();
const axios = require('axios');
const axiosThrottle = require('axios-throttle');
//pass axios object and value of the delay between requests in ms
axiosThrottle.init(axios, 200)

const token = process.env.TOKEN;
const domain = process.env.DOMAIN

module.exports =
    axios.create({
        baseURL: `https://${domain}.kuali.co/`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
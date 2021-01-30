require('dotenv').config();
const axios = require('axios');

const token = process.env.TOKEN;

const instance = (domain) => {
    axios.create({
        baseURL: `https://${domain}.kuali.co/`,
        timeout: 1000,
        headers: { 'Authentication': token }
    });
}

module.exports = {
    instance: instance(domain)
}
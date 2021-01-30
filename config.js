require('dotenv').config();
const axios = require('axios');

const token = process.env.TOKEN;
const domain = process.env.DOMAIN

const instance =
    axios.create({
        baseURL: `https://${domain}.kuali.co/`,
        headers: { 'Authentication': `Bearer ${token}` }
    });

module.exports = instance();
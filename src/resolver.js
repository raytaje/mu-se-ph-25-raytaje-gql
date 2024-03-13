const { response } = require('express');
const fetch = require('node-fetch');

const API_URL = 'http://localhost:3001';

const Query = {
  employee: async (parent, args, context, info) => {
    const { id } = args;
    const response = await fetch(`${API_URL}/employees/${id}`);
    const data = response.json();

    return data;
  }, 
  employees: async (parent, args, context, info) => {
    const response = await fetch(`${API_URL}/employees`);
    const data = response.json();

    return data;
  },
};

module.exports = { Query };

/*
    Connect to PostgreSQL and execute sql quries
*/

const {Client} = require('pg');
const fs = require('file-system');

const fileContents = fs.readFileSync('../postgres-config.json', 'utf8')
let data;

try 
{
  data = JSON.parse(fileContents)
} 
catch(err) 
{
  console.error(err)
}


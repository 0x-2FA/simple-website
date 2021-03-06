/*
    Connect to PostgreSQL and execute sql queries
*/

const {Pool} = require('pg');
const fs = require('file-system');
const res = require('express/lib/response');
const { rows } = require('pg/lib/defaults');

const table_posts = "posts"; // database table for storing articles

const fileContents = fs.readFileSync('postgres-config.json', 'utf8');
let data;

try 
{
  data = JSON.parse(fileContents);
} 
catch(err) 
{
  console.error(err);
}

const pool = new Pool(data);

module.exports = {
  pool,
  table_posts,
  create_post: (pool, table, title, body) => {
    pool.connect();
    const text = `insert into ${table} (title, body) values ('${title}', '${body}');`;
    pool.query(text, (err, res) =>{
      if (err) 
      {
        console.log(err.stack);  
      }
      else
      {
        console.log(res);
      }
    });
  },

  select_all: async (pool, table) => {
    
    const text = {
      text: `select * from ${table};`,
    }
    
    let posts = [];
  
    const client = await pool.connect();
    
    const result = await client.query(text);
    for (const row of result.rows) {
      posts.unshift(row)
    }
    return posts;
  },

};
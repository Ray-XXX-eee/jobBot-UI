const fs = require('fs');

fs.readFile('./text.tx','utf-8',(err,data)=>{
  if (err) throw err;
  console.log(data);
})

process.on('uncaught error', (err)=>{
  console.error(`there is uncaught error :${err}`);
  process.exit(1);
})


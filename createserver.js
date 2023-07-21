const http = require("http");
const fs = require("fs");
const port = 8000;
const server = http.createServer((req,res) => {
  
   if(req.url === "/"){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile("./index.html","utf8",(err,data)=>{
      if (err) throw err;
      res.write(data);
      res.end();
    })
   }else if(req.url === "/about"){
    res.writeHead(200,{"Content-Type":"application/json"});
     res.write(
      JSON.stringify({
        data:"this is about Page",
      })
     );
     res.end();
   }
   else{
    res.writeHead(404,{"Content-Type":"text/html"});
    res.write("<h1>Page Not Found</h1>");
    res.end();
   }
  
})

server.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});

 
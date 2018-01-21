let http=require('http');
let server=http.createServer(function(req,res) {
  res.writeHeade(200, {'Content-Type':'text/plain'});
  res.end("It realy work")
});
server.listen(49453,'49453')
console.log("It work!");
console.log("cls");
// alert("Hello world!")

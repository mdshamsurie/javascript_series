const http = require('http');
const fs = require('fs');
const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('Error : file not found ')
        }else {
            res.write(data);
        }
        res.end();
    });
};

http
.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/html',
    });
    
    const url = req.url;
//     if( url === '/about'){
//        // res.write('<h1> ini adalah halaman about </h1>');
//        renderHTML('./about.html', res);
//     }
//     else if( url === '/contact'){
//        // res.write('<h1> ini adalah halaman contact </h1>');
//        renderHTML('./contact.html', res);
//     } 
//     else {
//         renderHTML('./index.html', res);
//         // fs.readFile('./index.html', (err, data) => {
//         //     if(err){
//         //         res.writeHead(404);
//         //         res.write('Error : file not found ')
//         //     }else {
//         //         res.write(data);
//         //     }
//         //     res.end();
//         // });
//         //res.write('hello World!');
//        // res.end();
//     }

switch (url){
    case '/about':
        renderHTML('./about.html', res);
        break;
    case '/contact':
        renderHTML('./contact.html', res);
        break;
    default :
        renderHTML('./index.html', res);
        break;
}

 })

.listen(3000, () => {
    console.log(`server is listening on port ${port}...`)
});
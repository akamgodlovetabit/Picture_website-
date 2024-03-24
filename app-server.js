// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const app = express();
//
// app.use(cors());
//
// app.get('/Pictures.json', (req, res) => {
//     fs.readFile('Pictures.json', (err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.json(JSON.parse(data));
//         }
//     });
// });
//
// app.listen(3000, () => console.log('CORS-enabled server listening on port 3000'));


// import { Controller, Get, Res, Header } from '@nestjs/common';
// import { Response } from 'express';
// import { readFileSync } from 'fs';
//
// @Controller('Pictures.json')
// export class AppController {
//     @Get()
//     @Header('Access-Control-Allow-Origin', '*')
//     sendFile(@Res() res: Response) {
//         const data = readFileSync('Pictures.json');
//         res.send(JSON.parse(data.toString()));
//     }
// }

//
// const http = require('http');
// const fs = require('fs');
//
// const server = http.createServer((req, res) => {
//     if (req.url === '/Pictures.json' && req.method === 'GET') {
//         fs.readFile('Pictures.json', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Error: ' + err.message);
//             } else {
//                 res.writeHead(200, {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*'
//                 });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });
//
// server.listen(3000, () => console.log('CORS-enabled server listening on port 3000'));

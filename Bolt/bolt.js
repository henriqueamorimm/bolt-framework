const http = require('http');
const fs = require('fs');
//STYLE PAGES
const error404 = require('./404');
const Style = require('../src/style');
const Alert = require('./alert');

fs.readFile('./config.bolt', 'utf8', (err, data) => {
  if (err) {
    console.error('', err);
    return;
  }

  const configLines = data.split('\n');
  const config = {};

  configLines.forEach(line => {
    const [key, value] = line.split('=>').map(item => item.trim());

    if (value === 'true') {
      config[key] = true;
    } else if (value === 'false') {
      config[key] = false;
    } else {
      config[key] = value;
    }
  });

  const ProjectName = config['PROJECT-TITLE'] || "My Bolt Project";
  const ProjectDescription = config['PROJECT-DESCRIPTION'] || "This is my amazing Bolt Project";
  const sweetAlert = config['SWEETALERT'] || false;
  const port = config['PORT'] || 3000; // The default port is 3000
  const Logo = config['PROJECT-LOGO'] || "https://media.discordapp.net/attachments/1027557466113847408/1181398690947158047/logo-bolt.jpg?ex=6580ea45&is=656e7545&hm=1b10780dce55d3d87f1f9025bd2db195641957b288ba7a16ae8be013b88beaf2&=&format=webp";
  let html = '';

  if (config['HTML']) {
    fs.readFile(config['HTML'], 'utf8', (err, fileData) => {
      if (err) {
        console.error('Erro ao ler o arquivo HTML', err);
        html = ''; 
      } else {
        html = fileData; 
      }
    });
  } else {
    fs.readFile("./public/Apresentation.html", 'utf8', (err, fileData) => {
      if (err) {
        console.error('Erro ao ler o arquivo HTML', err);
        html = ''; 
      } else {
        html = fileData; 
      }
    });
  }

  http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      let headContent = `<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="${Logo}" rel="icon">${Style}`;
  
      if (config['BOOTSTRAP'] == true) {
        headContent += `<title>${ProjectName}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>`;
      } else {
        headContent += `<title>${ProjectName}</title>`;
      }
      if (config['SWEETALERT'] == true) {
        headContent += `${Alert}
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        `;
      }
   
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(headContent + html);
    } else {
      res.writeHead(404);
      res.end(error404);
    }
  }).listen(port);

  console.log('Bolt Framework @2023');
  console.log('');
  console.log(`Your Bolt Server started running on: \nhttp://localhost:${port}\nName: ${ProjectName}\nDescription: ${ProjectDescription}`);
});

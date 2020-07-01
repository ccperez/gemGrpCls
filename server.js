import     config from './config';
import  apiRouter from './api';
import    express from 'express';
import bodyParser from 'body-parser';

const server = express();

server.set('view engine', 'pug');

const lstURL = ['/', '/show/:id', '/create', '/edit/:id'];
server.get(lstURL, (req, res) => {
  res.render('index.pug', {
    content: 'Hello Express and <em>PUG</em>!'
  });
});

server.use(bodyParser.urlencoded({ extended: 'false' }));
server.use(bodyParser.json());

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.server, () => {
  console.info('Running on '+config.serverUrl);
});
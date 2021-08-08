import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter, staticRouter } from 'react-router-dom';
import App from './App';

const app = express();

const serverRender = (req, res, next) => {
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

const serve = express.static(path.resolve('./build'), {
  index: false,
});

app.use(serve);

app.use(serverRender);

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});

import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as fileUpload from 'express-fileupload';
import { existsSync } from 'fs';
import { join } from 'path';

import { bannersRoutes } from 'api/routes/bannersRoutes';
import { brandsRoutes } from 'api/routes/brandsRoutes';
import { categoriesRoutes } from 'api/routes/categoriesRoutes';
import { ordersRoutes } from 'api/routes/ordersRoutes';
import { productsRoutes } from 'api/routes/productsRoutes';
import { sliderRoutes } from 'api/routes/sliderRoutes';
import { AppServerModule } from './src/main.server';
import { environment } from 'environment/environment';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), environment.staticFilesLocation);
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Middlewares
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(
    fileUpload({
      createParentPath: true,
      limits: { fileSize: 100 * 1024 * 1024 },
      limitHandler: true,
      abortOnLimit: true,
      responseOnLimit: 'Files cannot be larger than 100 mb',
    })
  );

  // Express Rest API
  server.use('/api/banners', bannersRoutes);
  server.use('/api/slider', sliderRoutes);
  server.use('/api/categories', categoriesRoutes);
  server.use('/api/brands', brandsRoutes);
  server.use('/api/products', productsRoutes);
  server.use('/api/orders', ordersRoutes);

  server.get('/api/**', (req, res) => {
    res.status(404).json({ message: `route doesn't exist` });
  });

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

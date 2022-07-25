export const appRoot = `/**
 * this is the entry file for app's bundler
 * (not to be used by other components)
 */

import Application from 'express';
import {getPort} from './get-port';
import {getMockRoute} from './mock-route';

export const expressApp = async () => {
  const app = Application();
  const port = await getPort();
  registerRoutes(app);
  app.listen(port, () => {
    console.log(\`express-app app listening on port \${port}\`);
  });
};

function registerRoutes(app: Application.Application) {
  const mockRoute = getMockRoute();
  const routes = [mockRoute];
  routes.forEach(route => {
    app[route.method](route.route, route.middlewares);
  })
}

expressApp();`;

export const route = `import express, { Request, Response } from 'express';
export type Middleware = (req: Request, res: Response, next: express.NextFunction) => Promise<any>;

export interface Route {
  method: string;
  route: string | RegExp;
  middlewares: Middleware[];
}`;

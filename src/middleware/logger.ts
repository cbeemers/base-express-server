// Request logging middleware

import { Request, Response, NextFunction } from 'express';

export function logResponseBody(req: Request, res: Response, next: NextFunction) {
  // Hold original res.send
  const originalSend = res.send;

  // Override res.send
  res.send = function (body: any) {
    // Log details
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    console.log('Response:', body);

    // Call original res.send with the body
    return originalSend.call(this, body);
  };

  next();
}

export function logRequest (req:any, res:any, next:any) {
    const timestamp = new Date().toISOString();
    const { method, url } = req;
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  
    console.log(`[${timestamp}] ${method} ${url} - from ${ip}`);
    next();
};
  
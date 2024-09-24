// src/custom.d.ts or src/types/custom.d.ts
import { Payload } from '@src/authentication/authentication.type'; // Import your user entity or interface

declare global {
  namespace Express {
    interface Request {
      user: Payload; // You can specify the exact type of 'user' based on your application
    }
  }
}

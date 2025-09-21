import { NextFunction,Request,Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { CustomError } from './error.middleware.js';
import { SECRET_KEY } from '../configs/Env.js';

interface AuthenticatedRequest extends Request {
    user?:any;
}
export const requireAuth = (req:AuthenticatedRequest, res:Response, next:NextFunction)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            const error:CustomError = new Error("Token is missing");
            error.statusCode = 401;
            throw error;
        }

        if(!SECRET_KEY){
             const error:CustomError = new Error("Secret key is missing");
            error.statusCode = 500;
            throw error;
        }
        const decode = jwt.verify(token, SECRET_KEY) as JwtPayload;
        req.user = decode;
        next();
    }catch(err:any){
        if(err.name === "TokenExpiredError"){
            const error:CustomError = new Error("Token is expired");
            error.statusCode = 401;
            return next(error);
        }
        next(err);
    }
}
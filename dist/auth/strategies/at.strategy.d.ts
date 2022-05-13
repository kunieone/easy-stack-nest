import { Request } from 'express';
import { Strategy } from 'passport-jwt';
declare const AtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtStrategy extends AtStrategy_base {
    constructor();
    validate(req: Request, payload: any): any;
}
export {};

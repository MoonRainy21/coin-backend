import { Context, Next } from "koa";

export interface BasicBoothEvent {
    boothName: string,
    eventName: string,
    value: number
}

export interface BoothEvent {
    kyoId: string,
    boothName: string,
    eventName: string,
    value: number,
    time: Date,
    id: string,
    isApproved?: boolean
}

export interface User {
    kyoId : string,
    money : number,
    totalMoney : number,
    password: string,
    lastEvents: BoothEvent[]
}

export interface State {
    kyoId : string
}

export type MethodFunction = (ctx: Context, next: Next) => Promise<void>;

interface MethodData {
    methodName: string
    methodParam: string
    methodFunc: MethodFunction 
}
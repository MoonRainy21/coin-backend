import {  writeFile } from "fs";
import { BoothEvent } from "./types";

const LOGFILE_PATH ="./log.txt"

const generateLog = (event: BoothEvent) : string => {
    return (event.kyoId+", "+event.boothName+', '+event.eventName+', '+event.value.toString()+', '+event.time.toISOString()+", \n")
}

export const WriteMoneyLog = (
    event: BoothEvent
) : void => {
    writeFile(LOGFILE_PATH, generateLog(event), {flag:"a+"},err => {
        console.error(err)
    })
}
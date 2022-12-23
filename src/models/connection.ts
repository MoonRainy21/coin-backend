import { createConnection, Schema } from "mongoose";
import { MONGODB_URI } from "../secret/mongoURL";
import { BoothEvent, User } from "../util/types";

export const connection = createConnection(MONGODB_URI)

export const boothEventSchema = new Schema<BoothEvent>({
    kyoId: { type: String, required: true },
    eventName: { type: String, required: true },
    boothName: { type: String, required: true },
    value: { type: Number, required: true },
    time: { type: Date, required: true },
    id: { type: String, required: true },
    isApproved: { type: Boolean, required: true },
})

export const userSchema = new Schema<User>({
    kyoId: { type: String, required: true },
    money: { type: Number, required: true },
    totalMoney: { type: Number, required: true },
    password: { type: String, required: true },
    lastEvents: { type: [boothEventSchema], required: true }
})

export const BoothEventModel = connection.model<BoothEvent>('boothEvent', boothEventSchema)
export const UserModel = connection.model<User>('user', userSchema)
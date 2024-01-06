import {connect} from "mongoose"


export const connectDB = async () => {
    const url = process.env.DATABASE_URL ?? ""
    try {
        await connect(url, {})
    } catch(e: any) {
        console.log(e)
    }
}
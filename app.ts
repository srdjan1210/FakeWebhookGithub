import Express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()


const PORT = process.env.PORT || 8000;
const app = Express();


app.post('/webhook', (req: Request, res: Response) => {
    console.log(JSON.stringify(req.headers))
    console.log(JSON.stringify(req.body))
    console.log(JSON.stringify(req.query))
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
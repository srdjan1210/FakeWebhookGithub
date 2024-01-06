import { Router, Request, Response } from "express";
import { Controller } from "../interfaces/controller.interface";


export class WebhookController implements Controller {

    prefix: string;
    router: Router;

    constructor() {
        this.prefix = "/webhook";
        this.router = Router()
    }
    
    initRoutes(): void {
        this.router.post('/', [], this.postWebhook)
    }

    private postWebhook(req: Request, res: Response) {
        console.log(req.query)
        return res.json({ status: "Success" })
    }   
}
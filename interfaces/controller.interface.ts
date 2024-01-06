import { Router } from "express"

export interface Controller {
    initRoutes(): void
    prefix: string
    router: Router
}
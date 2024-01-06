import App from "./app"
import { WebhookController } from "./controllers/webhook.controller";

const app = new App([
    new WebhookController()
]);
app.listen();
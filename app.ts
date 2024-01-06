import Express, { Request, Response, json } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { Controller } from "./interfaces/controller.interface"

dotenv.config()


class App {
    public app: Express.Application;
   
    constructor(controllers: Controller[]) {
      this.app = Express();
   
      this.connectToTheDatabase();
      this.initializeMiddlewares();
      this.initializeControllers(controllers)
    }
   
    public listen() {
      this.app.listen(process.env.PORT, () => {
        console.log(`App listening on the port ${process.env.PORT}`);
      });
    }
   
    private initializeMiddlewares() {
      this.app.use(json());
    }
    
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach(c => {
            const prefix = c.prefix ?? ""
            this.app.use(prefix, c.router)
        })
    }
   
    private connectToTheDatabase() {
      const { DATABASE_URL = ""} = process.env;
      mongoose.connect(DATABASE_URL)
      .then(() => console.log('Successfully connected to database'))
      .catch((e) => console.log(e));
    }
  }
   
  export default App;
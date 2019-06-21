import { BaseWebsiteRoute } from "./Interfaces/BaseWebsiteRoute";
import {Request, Response} from 'express';

export class WebsiteRoutes implements BaseWebsiteRoute {
    initialize(httpServer: import("../Core/Interfaces/HTTPServer").HTTPServer): void {
        httpServer.get("/", this.homePage.bind(this));
    }


    public async homePage(req:Request,res:Response) {
        res.render("public/index",{
            title: "HomePage"
        })
    }
    
}
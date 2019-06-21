import {HTTPServer} from '../../Core/Interfaces/HTTPServer';

export interface BaseWebsiteRoute {
    initialize(httpServer: HTTPServer): void;
}
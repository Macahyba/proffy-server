import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';


const routes = express.Router();
const classesController = new ClassesController();
const connectionsConstroller = new ConnectionController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsConstroller.create);
routes.get('/connections', connectionsConstroller.index);

export default routes;
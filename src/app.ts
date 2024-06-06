import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
import './dbs/init.mongodb';


// app routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const strCompress = 'hello fantipjs';
    return res.status(200).json({
        message: 'Welcome Fantipjs!',
        metadata: strCompress.repeat(10000)
    });
});

export default app;

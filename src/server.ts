import "reflect-metadata";
import "express-async-errors";
import express, { Request,Response, NextFunction } from 'express';
import routes from "./routes/routes";
import './database/index';
import AppError from "./errors/AppError";

const app = express();
app.use(express.json());

app.use('/api', routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }
        return response.status(500).json({
            status: 500,
            message: 'Internal server error'
        });
    }
)

let port = 3333;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
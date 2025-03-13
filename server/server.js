import express from "express";
import dotenv from "dotenv";
import { connectDB, closeDB } from "./lib/db.js";
import cors from "cors";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Express app instance
const app = express();

// Parse json
app.use(express.json());

// Enable Corse
app.use(cors({
    origin: ["https://buildydn.com","https://buildydn.com:80","https://buildydn.com:3000","http://localhost:5173","http://localhost:80","http://165.227.148.145","http://165.227.148.145:80"],   // Allow only this origin
    credentials: true,                 // Allow credentials (cookies, etc.)
    allowedHeaders: [
        "Content-Type", 
        "Authorization", 
        "Access-Control-Allow-Origin"     // Add any other headers your app might use
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
}));

  app.options("*", cors()); // Handle preflight requests for all routes

  // Wrong Api Route handler
app.use((req, res, next) => {
    const error = new ApiError("API route not found", 404);
    next(error);
});

// Centralized error handler
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
        code: err.statusCode,
        status: err.status,
        message: err.message,
        });
    }
    
        logger.error(err.stack); // Log for internal server error
        res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        });
    });

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

(async () => {
    try {
        await connectDB();
    
        server.listen(PORT, "0.0.0.0",() => {
            logger.info(`Server is running on http://localhost:${PORT}`);
        });
    
        // Initialize Socket.IO with the HTTP server
    
        server.keepAliveTimeout = 3000;
    
        process.on('unhandledRejection', (reason, promise) => {
                console.error('Unhandled Promise Rejection:', reason);
        });
    
        process.on("uncaughtException", (err) => {
            console.error("Uncaught Exception:", err);
        });
        process.on("SIGTERM", () => {
            logger.info("SIGTERM signal received: closing HTTP server");
            server.close(async () => {
            logger.info("HTTP server closed");
            // Close the database connection
            await closeDB();
            process.exit(0);
            });
        });
        } catch (error) {
        logger.error("Failed to start server");
        logger.error(error.stack);
        process.exit(1);
        }
    })();
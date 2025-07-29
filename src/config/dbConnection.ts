import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;
const DB_NAME = process.env.DB_NAME!;


export async function connectDB(): Promise<typeof mongoose> {
    mongoose.set("strictQuery", false);
    mongoose.set("runValidators", true);

    const connection = mongoose.connection;

    // Set up event listeners BEFORE connecting to catch all events reliably
    connection.on("connected", () => console.log("Mongoose connected"));
    connection.on("error", (err) => console.error("Mongoose connection error:", err));
    connection.on("disconnected", () => console.log("Mongoose disconnected"));

    // Ensure graceful shutdown
    process.on("SIGINT", async () => {
        await connection.close();
        console.log("Mongoose disconnected through app termination");
        process.exit(0);
    });

    try {
        const conn = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`, {
            dbName: DB_NAME,
            serverSelectionTimeoutMS: 5000,
            // options like useNewUrlParser and useUnifiedTopology are no longer needed in v6+
        });
        console.log(`MongoDB connected: host=${conn.connection.host}`);
        return mongoose;
    } catch (err: any) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
}

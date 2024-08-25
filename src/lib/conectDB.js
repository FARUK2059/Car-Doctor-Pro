
import { MongoClient, ServerApiVersion } from "mongodb";

let db;
let client;

export const connectDB = async () => {
    if (db) return db;
    try {
       
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI

        if (!client) {
            client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                },
            });
            await client.connect();
            console.log("mongoDB Conected Successfully");
            
        }
        db = client.db('car-doctor-pro');
        return db;
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw new Error("Database connection failed");
    }
};


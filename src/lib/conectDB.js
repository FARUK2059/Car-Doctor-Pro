
import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        // const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        const uri = `mongodb+srv://${process.env.ENV_QUERY}:${process.env.ENV_QUERYPASS}@cluster0.6e55rfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db('car-doctor-pro')
        return db;
    } catch (error) {
        console.log({ error });
    }
};
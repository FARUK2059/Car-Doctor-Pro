
import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        // const uri = process.env.NEXT_PUBLIC_MONGODB_URI

        const uri = process.env.NEXT_PUBLIC_MONGODB_URI



        // const uri = "mongodb+srv://${process.env.ENV_QUERY}:${process.env.ENV_QUERYPASS}@cluster0.6e55rfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

//////////////////////////////////////////////////

// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://${process.env.ENV_QUERY}:${process.env.ENV_QUERYPASS}@cluster0.6e55rfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// dbConnect();
// async function dbConnect() {
//     try {

//         await client.connect();
        
//         console.log('You successfully connected to MongoDB!');
        
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// // run().catch(console.dir);


// export default client;
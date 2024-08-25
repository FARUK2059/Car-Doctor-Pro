
import { connectDB } from "../../../lib/conectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        // const userCollection = db.collection("users");
        const userCollections = client.db("carDoctorPro").collection("users");
        const exist = await userCollections.findOne({ email: newUser.email });
        console.log(exist);
        if (exist) {
            return NextResponse.json({ message: "User Exists" }, { status: 304 });
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollections.insertOne({ ...newUser, password: hashedPassword });

        return NextResponse.json({ message: "User Created" }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something Went Wrong", error },
            { status: 500 }
        );
    }
};



// import client from "../../../lib/conectDB";
// const db = client.db("users");

// const user = (req, res) => {

    
//     const userCollections = db.collection("user");
//     // const userCollections = client.db("madiCare").collection("users");

//     if (req.method === "GET") {
//         res.send({ channelName: "userInfo" });
//     }
//     else if (req.method === "POST") {
//         console.log(req.body);
//         res.status(200).send({ message: "Successfully Posted" })

//     }
// }
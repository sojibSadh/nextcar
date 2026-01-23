const { dbConnect } = require("@/lib/provider/dbConnect");

const users = await dbConnect("users");
import bcrypt from "bcrypt";

export async function POST(request) {
    const reqBody = await request.json();

    const isUserExist = await users.findOne({ email: reqBody.email });
    if (isUserExist) {
        return new Response(
            JSON.stringify({ message: "User already exists" }),
            { status: 409 }
        );
    };

    const passwordHash = await bcrypt.hash(reqBody.password, 10);
    const newUser = await users.insertOne({ ...reqBody, password: passwordHash });

    console.log(newUser);

    // const newUser = await users.insertOne(reqBody);
    return Response.json(({
        status: 201,
        message: "User created successfully",
        data: newUser
    }));


}
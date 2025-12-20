import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(request) {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     return NextResponse.json(
    //         { message: "로그인 필요" },
    //         { status: 401 }
    //     );
    // }

    const body = await request.json();

    const 저장할거 = {
        content: body.comment,
        parent: new ObjectId(body._id),
        // author: session.user.email,
    };

    const db = (await connectDB).db("Forum");
    await db.collection("comment").insertOne(저장할거);

    return NextResponse.json(
        { message: "저장완료" },
        { status: 200 }
    );
}

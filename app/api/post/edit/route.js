import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const formData = await request.formData();

    const id = formData.get("_id");
    const title = formData.get("title");
    const contents = formData.get("contents");

    if (!id) {
        return NextResponse.json(
            { message: "id 없음" },
            { status: 400 }
        );
    }

    const client = await connectDB;
    const db = client.db("Forum");

    await db.collection("post").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title,
                contents,
            },
        }
    );

    // return NextResponse.redirect(
    //     new URL("/board/list", request.url),
    //     { status: 302 }
    // );
    return new NextResponse(null, {
            status: 302,
            headers: { Location: "/board/list" },
    });
}

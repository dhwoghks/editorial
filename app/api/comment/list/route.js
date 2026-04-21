import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json(
            { message: "id 없음" },
            { status: 400 }
        );
    }

    const db = (await connectDB).db("Forum");

    const result = await db
        .collection("comment")
        .find({ parent: new ObjectId(id) })
        .toArray();
    return NextResponse.json(result, { status: 200 });
}

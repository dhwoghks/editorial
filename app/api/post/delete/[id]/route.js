import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json(
            { message: "id 없음" },
            { status: 400 }
        );
    }

    const db = (await connectDB).db("Forum");

    const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json(
        { message: "삭제완료" },
        { status: 200 }
    );
}

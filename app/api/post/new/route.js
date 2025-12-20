import { connectDB } from "@/util/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();

  const title = formData.get("title");
  const contents = formData.get("contents");

  if (!title || title === "") {
    return NextResponse.json(
      { message: "너 왜 제목 안쓰냐" },
      { status: 400 }
    );
  }

  const client = await connectDB;
  const db = client.db("Forum");

  await db.collection("post").insertOne({
    title,
    contents,
  });

  return NextResponse.redirect(
    new URL("/board/list", request.url),
    { status: 302 }
  );
}

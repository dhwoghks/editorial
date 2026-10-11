export async function GET() {
    const date = new Date();
    return Response.json(date.toLocaleString('ko-kr'), {
        status: 200,
    });
}

export async function POST() {
    return Response.json({ name: '바보' }, {
        status: 200,
    });
}

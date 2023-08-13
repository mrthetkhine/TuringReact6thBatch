import {NextResponse} from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    console.log('/api/todos/ids ',id);
    return NextResponse.json({
        id,
        title : 'Dummy'
    });
}
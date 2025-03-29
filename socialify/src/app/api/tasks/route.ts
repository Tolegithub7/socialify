import { NextResponse } from "next/server";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}
interface CreateTaskRequest {
    title: string;
}

let tasks: Task[] = [
    { id: 1, title: "NextJs Route Handler", completed: false },
    { id: 2, title: "App Router", completed: true },
    { id: 3, title: "Socialify Project", completed: false },
    { id: 4, title: "Server Action", completed: true },
]

export async function GET() {
    return NextResponse.json(tasks);
}

export async function POST(request: Request) {
    try {
        const body: CreateTaskRequest = await request.json();
        if (!body.title) {
            return NextResponse.json({ error: "Title is required" }, { status: 400 });
        }
        const newTask: Task = {
            id: tasks.length + 1,
            title: body.title,
            completed: false,
        };
        tasks.push(newTask);
        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = parseInt(searchParams.get("id") || "");
        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }
        const taskIndex = tasks.findIndex(
            (task) => task.id === id
        );
        if(taskIndex === -1) {
            return NextResponse.json({ error: "Task not found" }, { status: 404 });
        }
        tasks = tasks.filter((task) => task.id !== id);
        return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request parameters" }, { status: 400 });
    }
}
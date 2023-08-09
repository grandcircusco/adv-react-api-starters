import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const questionId = params.get("questionId");
  let data = await prisma.answer.findMany();
  if (questionId) {
    data = await prisma.answer.findMany({
      where: { questionId: +questionId },
      orderBy: [{ createdAt: "desc" }],
    });
  }
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  let data = await request.json();
  let newData = await prisma.answer.create({ data });
  return NextResponse.json(newData, { status: 201 });
}

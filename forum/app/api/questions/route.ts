import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const searchTerm = params.get("searchTerm");
  const tags = params.get("tags")?.split(","); // sent in as "...&tags=jokes,literature"
  let data;
  if (searchTerm && tags) {
    data = await prisma.question.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm } },
          { description: { contains: searchTerm } },
        ],
        tags: { hasEvery: tags },
      },
      orderBy: [{ createdAt: "desc" }],
    });
  } else if (searchTerm) {
    data = await prisma.question.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm } },
          { description: { contains: searchTerm } },
        ],
      },
      orderBy: [{ createdAt: "desc" }],
    });
  } else if (tags) {
    data = await prisma.question.findMany({
      where: { tags: { hasEvery: tags } },
      orderBy: [{ createdAt: "desc" }],
    });
  } else {
    data = await prisma.question.findMany({
      orderBy: [{ createdAt: "desc" }],
    });
  }
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  let data = await request.json();
  let newData = await prisma.question.create({ data });
  return NextResponse.json(newData, { status: 201 });
}

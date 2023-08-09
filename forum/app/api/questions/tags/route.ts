import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
  const tags = await prisma.question.findMany({ select: { tags: true } });
  const distinctTags = new Set();
  tags.forEach((obj) => {
    obj.tags.forEach((item) => {
      distinctTags.add(item);
    });
  });

  return NextResponse.json(Array.from(distinctTags));
}

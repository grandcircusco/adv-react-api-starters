import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

type IdParam = {
  params: { id: string };
};

export async function GET(request: Request, { params }: IdParam) {
  const id = parseInt(params.id);
  const data = await prisma.answer.findMany({
    where: { questionId: id },
    orderBy: [{ createdAt: "desc" }],
  });
  return NextResponse.json(data);
}

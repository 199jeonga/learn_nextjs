import { PrismaClient } from "@prisma/client";

interface RequestBody {
  title: string;
  keyword: string;
  telnum: string;
  authorId: number;
}

const client = new PrismaClient();

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const metasetting = await client.metasetting.create({
    data: {
      title: body.title,
      keyword: body.keyword,
      telnum: body.telnum,
      authorId: body.authorId,
    },
  });

  return new Response(JSON.stringify(metasetting));
  // JavaScript의 Response 클래스를 사용하여 HTTP 응답을 생성
  // 서버에서 클라이언트에게 응답을 보낼 때 사용
  // JavaScript 객체 result를 JSON 문자열로 변환하고, 그것을 Response 객체에 담아서 반환합니다.
  // } else return new Response(JSON.stringify(null));
}

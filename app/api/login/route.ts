import prisma from "@/app/lib/prisma";
import { signJwtAccessToken } from "@/app/lib/jwt";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;

    // 추가된 부분
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    console.log("login", result);
    return new Response(JSON.stringify(result));

    // JavaScript의 Response 클래스를 사용하여 HTTP 응답을 생성
    // 서버에서 클라이언트에게 응답을 보낼 때 사용
    // JavaScript 객체 result를 JSON 문자열로 변환하고, 그것을 Response 객체에 담아서 반환합니다.
  } else return new Response(JSON.stringify(null));
}

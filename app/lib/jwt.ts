import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

//  JWT의 서명 옵션을 설정하는 데 사용되는 객체
// SignOption : type
// JWT를 서명할 때 사용되는 여러 옵션을 지정
const DEFAULT_SIGN_OPTION: SignOption = {
  // 현재 expiresIn이라는 특정 옵션이 설정
  expiresIn: "1h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION // 이건 두번째 매개변수의 type은 SignOption이며, 값을 입력하지 않으면 DEFAULT_SIGN_OPTION를 기본 값으로 사용한다는 의미
) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options); // jwt 패키지의 sign 함수를 이용해서 token을 얻어내고 그걸 리턴 하는 함수
  return token;
}

// 📍 나중에 API 콜이 올 때 전달받은 token이 정확한 건지 체크하는 함수
// 📍 이 함수는 문자열로 표현된 JWT를 받아와서 검증하는 역할
export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    //  📍 주어진 토큰을 검증
    const decoded = jwt.verify(token, secret_key!);
    // 메모 :
    // secret_key! : TypeScript에서의 non-null assertion 연산자
    // process.env.SECRET_KEY가 null 또는 undefined일 수 있기 때문에 TypeScript는 경고를 표시할 것입니다. 하지만 코드 내에서 ! 연산자를 사용하면 해당 변수를 사용할 때의 경고를 무시하고 사용한다는 의미

    // 메모 :
    // jwt.verify(token, secret_key!);  : jwt.verify 함수는 토큰이 유효하면 해당 토큰의 페이로드를 반환하고 그렇지 않으면 예외를 발생

    // 📍 검증이 성공하면 페이로드를 반환합니다. 반환되는 값은 JwtPayload 타입으로 형변환
    return decoded as JwtPayload;
    // 메모 :
    // as 키워드는 TypeScript에서의 형 변환을 의미합니다. as를 사용하면 컴파일러에게 해당 값이 특정 형식이라고 명시적으로 알려주는 역할
    // jwt.verify 메서드의 반환 형식은 any이기 때문에 TypeScript에게는 정확한 형식을 알려주지 않습니다. 따라서 이를 JwtPayload로 명시적으로 형변환해주기 위해 as JwtPayload를 사용
    // 이 작업은 컴파일러에게 "나는 이 값이 JwtPayload 형식이라고 확신한다"라고 알려주는 역할을 합니다. 그러나 이 작업은 실제로 런타임에는 아무런 영향을 미치지 않으며, 런타임에서는 JavaScript처럼 동작합니다.
    // 다만 TypeScript에서는 개발자에게 형식에 대한 안전성을 제공하기 위한 목적으로 사용
  } catch (error) {
    console.log(error);
    return null;
  }
}

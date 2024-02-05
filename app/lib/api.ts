interface apiInterface {
  url: string;
  data: object;
}

export function POST({ url, data }: apiInterface): void {
  fetch(`${process.env.NEXTAUTH_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res2) => {
      if (res2) {
        console.log(res2);
        return res2;
      } else {
        return null;
      }
    });
}

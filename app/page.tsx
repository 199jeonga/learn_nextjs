import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hello, Main Page!</h1>
      <Link href="/login" scroll={false}>
        login
      </Link>
    </div>
  );
}

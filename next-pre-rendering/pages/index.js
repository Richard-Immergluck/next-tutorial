import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href={"/users"}>
        <a>Users</a>
      </Link>
      <div></div>
      <Link href={"/posts"}>
        <a>Posts</a>
      </Link>
      <Link href={"/products"}>
        <a>Products</a>
      </Link>
    </>
  );
}

export default Home;

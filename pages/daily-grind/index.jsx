import Link from "next/link";

export default function DailyGrindPage() {
  return (
    <>
      <h1>Daily grind</h1>
      <p>Stuff I work on daily</p>
      <h2>Capture The Flag Challenges</h2>
      <article>
        <Link href={"/daily-grind/ethernaut"}>
          <h3>Ethernaut</h3>
          <p>Ethernaut is a bla bla bla</p>
        </Link>
      </article>
    </>
  );
}

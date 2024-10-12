import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>

      <Link href="/meals/share">Share Meals</Link>
      <br />
      <br />
      <Link href="/meals/meal-1">Meal 1</Link>
      <br />
      <Link href="/meals/meal-2">Meal 2</Link>
    </main>
  );
}

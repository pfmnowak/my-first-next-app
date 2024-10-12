export default function MealItem({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Meal Item - {params.mealsSlug}
      </h1>
    </main>
  );
}

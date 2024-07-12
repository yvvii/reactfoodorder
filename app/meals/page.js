import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meal shared by our vibrant community",
};

export async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Decision meals,created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your favourite recipe and cook it yourself .it is easy and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals....</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

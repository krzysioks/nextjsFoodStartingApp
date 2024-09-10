import { Suspense } from "react";
import MealsGrid from "@/components/MealsGrid";
import Link from "next/link";

import { getMeals } from "@/db/mealsSql";

import classes from "./page.module.css";

const MealsWrapperComponent = async () => {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
};

export const metadata = {
	title: "All Meals",
	description: "Browse all available meals",
};

const loadingComponent = () => {
	return <p className={classes.loading}>Fetching Meals...</p>;
};

const Meals = async () => {
	const meals = await getMeals();
	return (
		<>
			<header className={classes.header}>
				<h1>MealPage!</h1>
				<p className={classes.cta}>
					<Link href="/meals/share">Share</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={loadingComponent()}>
					<MealsWrapperComponent meals={meals} />
				</Suspense>
			</main>
		</>
	);
};

export default Meals;

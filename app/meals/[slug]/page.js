import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "@/db/mealsSql";

import classes from "./page.module.css";

export const generateMetadata = async ({ params }) => {
	const meal = await getMeal(params.slug);

	if (!meal) {
		return notFound();
	}

	return {
		title: meal.title,
		description: meal.summary,
	};
};

const MealDetailPage = async ({ params }) => {
	const meal = await getMeal(params.slug);

	if (!meal) {
		return notFound();
	}

	meal.instructions = meal.instructions.replace(/\n/g, "<br />");

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} alt={meal.title} fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>SUMMARY</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
};

export default MealDetailPage;

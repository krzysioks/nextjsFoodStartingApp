"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "@/db/mealsSql";
import { revalidatePath } from "next/cache";

const isEmpty = (value) => value.trim() === "";

export const shareMeal = async (prevState, formData) => {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isEmpty(meal.title) ||
		isEmpty(meal.summary) ||
		isEmpty(meal.instructions) ||
		meal.image.size === 0 ||
		isEmpty(meal.creator) ||
		isEmpty(meal.creator_email) ||
		!meal.creator_email.includes("@")
	) {
		// throw new Error("Please fill out all fields");
		return {
			error: "Please fill out all fields",
		};
	}

	await saveMeal(meal);
	revalidatePath("/meals");
	redirect("/meals");
};

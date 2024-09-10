"use client";

import { useFormStatus } from "react-dom";

const MealFormSubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending}>
			{pending ? "Submitting..." : "Share Meal"}
		</button>
	);
};

export default MealFormSubmitButton;

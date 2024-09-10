import MealItem from "@/components/MealItem";
import classes from "./mealsGrid.module.css";

const MealsGrid = (props) => {
	const { meals } = props;

	return (
		<ul className={classes.meals}>
			{meals.map((meal) => {
				return (
					<li key={meal.id}>
						<MealItem {...meal} />
					</li>
				);
			})}
		</ul>
	);
};

export default MealsGrid;

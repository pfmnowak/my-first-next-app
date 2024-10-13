import { ReactNode } from "react";
import MealItem, { Meals } from "./MealItem";
import classes from "./MealsGrid.module.scss";

type MealsGridProps = {
  meals: Meals;
  children?: ReactNode;
};

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;

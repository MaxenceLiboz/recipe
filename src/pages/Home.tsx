import react, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import RecipeModal from '../components/RecipeModal';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/validatedRecipe.json';
// import nutritionalValues from '../data/nutritionValue.json';

export interface INutrionalValue {
	calories: number;
	proteins: number;
	fat: number;
	carbs: number;
}

export interface IRecipe {
	name: string;
	type: string;
	picture: string;
	description: string;
	recipe: string[];
	ingredients: {
		name: string;
		value: number;
		metric: string;
	}[];
}

export default function Home() {
	const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);
	const [selectedNutritionalValue, setSelectedNutritionalValue] = useState<INutrionalValue | null>(null);
	let nutritionalValues = require('../data/nutritionValue.json');

	const handleCardClick = (recipe: IRecipe, nutritionalValue: INutrionalValue) => {
		setSelectedRecipe(recipe);
		setSelectedNutritionalValue(nutritionalValue);
	};

	const handleCloseModal = () => {
		setSelectedRecipe(null);
		setSelectedNutritionalValue(null);
	};

	return (
		<Grid item container gap={2} justifyContent={'center'}>
			{recipes.map((recipe, key) => {
				let nutritionalValue: INutrionalValue = { calories: 0, carbs: 0, fat: 0, proteins: 0 };

				recipe.ingredients.map((ingredient: { name: string; value: number }) => {
					const value = nutritionalValues[ingredient.name];
					if (!value) {
						return;
					}
					nutritionalValue.calories += value['calories']
						? parseFloat(((value['calories'] * ingredient.value) / 100).toFixed(1))
						: 0;
					nutritionalValue.carbs += value['carbs']
						? parseFloat(((value['carbs'] * ingredient.value) / 100).toFixed(1))
						: 0;
					nutritionalValue.fat += value['fat']
						? parseFloat(((value['fat'] * ingredient.value) / 100).toFixed(1))
						: 0;
					nutritionalValue.proteins += value['proteins']
						? parseFloat(((value['proteins'] * ingredient.value) / 100).toFixed(1))
						: 0;
				});
				return (
					<Grid key={key} item container xs={10} sm={4} md={3}>
						<RecipeCard recipe={recipe} nutritionalValue={nutritionalValue} onCardClick={handleCardClick} />
					</Grid>
				);
			})}
			<RecipeModal
				recipe={selectedRecipe}
				nutritionalValue={selectedNutritionalValue}
				onClose={handleCloseModal}
			/>
		</Grid>
	);
}

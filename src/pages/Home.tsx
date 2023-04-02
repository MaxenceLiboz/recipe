import react, { useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import RecipeModal from '../components/RecipeModal';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes.json';

export default function Home() {
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const handleCardClick = (recipe: any) => {
		console.log('HANDLE: ', recipe);
		setSelectedRecipe(recipe);
	};

	const handleCloseModal = () => {
		setSelectedRecipe(null);
	};

	return (
		<Grid item container gap={2} justifyContent={'center'}>
			{recipes.map((recipe, key) => {
				return (
					<Grid key={key} item container xs={10} sm={4} md={3}>
						<RecipeCard recipe={recipe} onCardClick={handleCardClick} />
					</Grid>
				);
			})}
			<RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
		</Grid>
	);
}

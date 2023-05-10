import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { StringMappingType } from 'typescript';
import { INutrionalValue } from '../pages/Home';

const IngredientsList = (props: { ingredients: any; nutritionalValue: INutrionalValue }) => {
	const { ingredients, nutritionalValue } = props;

	const [portion, setPortion] = useState(1);
	return (
		<List>
			<TextField
				id="portion"
				label={`Number of portion(s): ${portion}`}
				variant="filled"
				onChange={(e) => {
					if (e.target.value !== '') setPortion(parseFloat(e.target.value));
					else setPortion(1);
				}}
			/>
			<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
				<b>Ingredients ({portion} portion(s)):</b>
			</Typography>
			{ingredients.map((ingredient: { name: string; value: number; metric: string }, key: number) => (
				<Typography key={key} variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
					{ingredient.name}
					{ingredient.metric !== ''
						? `: ${(ingredient.value * portion).toFixed(1)} ${ingredient.metric}`
						: ''}
				</Typography>
			))}
			<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
				<b>Valeur nutritionelle ({portion} portion(s)):</b>
			</Typography>
			<Typography variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
				Calories: {(nutritionalValue.calories * portion).toFixed(1)} kcal
			</Typography>
			<Typography variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
				Protéines: {(nutritionalValue.proteins * portion).toFixed(1)} g
			</Typography>
			<Typography variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
				Glucides: {(nutritionalValue.carbs * portion).toFixed(1)} g
			</Typography>
			<Typography variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
				Gras: {(nutritionalValue.fat * portion).toFixed(1)} g
			</Typography>
		</List>
	);
};

export default IngredientsList;

import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const IngredientsList = (props: any) => {
	const { ingredients } = props;
	console.log(ingredients);
	return (
		<List>
			<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
				<b>Ingredients (1 portion):</b>
			</Typography>
			{ingredients.map((ingredient: any, key: number) => (
				<Typography key={key} variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
					{'- '}
					{ingredient}
				</Typography>
			))}
		</List>
	);
};

export default IngredientsList;

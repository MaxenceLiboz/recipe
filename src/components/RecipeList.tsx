import React from 'react';
import { List, Typography } from '@mui/material';

const RecipeList = (props: any) => {
	const { recipeList } = props;
	return (
		<List>
			<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
				<b>La recette:</b>
			</Typography>
			{recipeList.map((list: any, key: number) => (
				<Typography key={key} variant="body2" color="text.primary" style={{ padding: '.2em 0' }}>
					{'- '}
					{list}
				</Typography>
			))}
		</List>
	);
};

export default RecipeList;

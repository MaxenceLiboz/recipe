import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const RecipeCard = (props: any) => {
	const { recipe, onCardClick } = props;
	const handleClick = () => {
		onCardClick(recipe);
	};

	return (
		<Card onClick={handleClick}>
			<CardActionArea>
				<Grid container alignItems={'center'} direction={'column'}>
					<CardMedia component="img" image={recipe?.picture} alt={recipe?.name} />
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							style={{ borderBottom: '1px solid', textAlign: 'center', padding: '.5em 0' }}
						>
							{recipe?.name}
						</Typography>

						<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
							<b>Type:</b> {recipe?.type}
						</Typography>
						<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
							<b>Description:</b> {recipe?.description}
						</Typography>
					</CardContent>
				</Grid>
			</CardActionArea>
		</Card>
	);
};

export default RecipeCard;

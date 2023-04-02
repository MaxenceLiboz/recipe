import React from 'react';
import { Modal, Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import IngredientsList from './IngredientsList';
import RecipeList from './RecipeList';

const RecipeModal = (props: any) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const mdScreen = useMediaQuery(theme.breakpoints.up('md'));

	const { recipe, onClose } = props;
	console.log('MEAL: ', recipe);
	return (
		<Modal open={recipe !== null} onClose={onClose}>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: 'background.paper',
					boxShadow: 24,
					p: 4,
					width: '90%',
					height: '90%',
					overflowY: 'scroll'
				}}
			>
				<Grid container justifyContent={'space-around'}>
					<Grid item container direction={'column'} md={12}>
						<img
							src={recipe?.picture}
							alt={recipe?.name}
							style={{ width: smScreen ? '80%' : mdScreen ? '30%' : '50%', margin: 'auto' }}
						/>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							style={{ borderBottom: '1px solid', textAlign: 'center', padding: '.5em 0' }}
						>
							{recipe?.name}
						</Typography>
					</Grid>
					<Grid item container direction={'column'} xs={12} md={5}>
						<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
							<b>Type:</b> {recipe?.type}
						</Typography>
						<Typography variant="body2" color="text.primary" style={{ padding: '.5em 0' }} component="div">
							<b>Description:</b> {recipe?.description}
						</Typography>
						<IngredientsList ingredients={recipe?.ingredients} />
					</Grid>
					<Grid item container direction={'column'} xs={12} md={5}>
						<RecipeList recipeList={recipe?.recipe} />
					</Grid>
				</Grid>
			</Box>
		</Modal>
	);
};

export default RecipeModal;

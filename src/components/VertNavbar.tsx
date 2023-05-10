import React from 'react';
import { useState } from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Home, MenuRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
	borderRight: `1px solid`,
	width: '250px'
}));

const items = [
	{
		icon: <Home />,
		text: 'Home',
		path: '/recipe'
	}
];

export const VertNavbar = ({ isOpen, setIsOpen }: any) => {
	const [open, setOpen] = useState(isOpen);

	const handleWindowResize = () => {
		setOpen(window.innerWidth >= 960);
		setIsOpen(window.innerWidth >= 960);
	};

	const handleChange = (event: boolean) => {
		setOpen(event);
		setIsOpen(event);
	};

	// Add event listener for window resize
	window.addEventListener('resize', handleWindowResize);

	return (
		<div>
			<IconButton
				onClick={() => {
					handleChange(!open);
				}}
			>
				<MenuRounded sx={{ color: 'secondary.main' }} />
			</IconButton>
			<Drawer
				variant={window.innerWidth >= 960 ? 'persistent' : 'temporary'}
				open={open}
				PaperProps={{ sx: { backgroundColor: 'background.default' } }}
			>
				<DrawerHeader>
					<IconButton
						onClick={() => {
							handleChange(!open);
						}}
					>
						<MenuRounded sx={{ color: 'secondary.main' }} />
					</IconButton>
				</DrawerHeader>
				<List
					sx={{
						borderRight: '1px solid',
						borderTop: '1px solid',
						height: '100vh'
					}}
				>
					{items.map((item) => {
						const { icon, text, path } = item;
						return (
							<ListItem key={text} disablePadding>
								<ListItemButton component={Link} to={path}>
									<ListItemIcon sx={{ color: 'secondary.main' }}>{icon}</ListItemIcon>
									<ListItemText
										primary={
											<Typography variant="h6" sx={{ color: 'secondary.main' }}>
												{text}
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
						);
					})}
				</List>
			</Drawer>
		</div>
	);
};

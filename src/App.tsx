import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { VertNavbar } from './components/VertNavbar';
import Home from './pages/Home';
import { darkTheme } from './theme';

function App() {
	const [isOpen, setIsOpen] = useState(window.innerWidth >= 960);

	const routes = useRoutes([{ path: '/recipe', element: <Home /> }]);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid container style={{ height: '100vh' }}>
				<Grid item style={{ width: isOpen ? '250px' : '0px' }}>
					<VertNavbar vertNavbar={true} isOpen={isOpen} setIsOpen={setIsOpen} />
				</Grid>
				<Grid item xs mt={8}>
					{routes}
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;

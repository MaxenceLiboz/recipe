import { createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

const htbGreen = '#9fef00';
const htbGrey = '#a4b1cd';
const nodeBlack = '#141d2b';
const nodeBlackLighter = '#1b2738';
const azure = '#0086ff';
const nuggetYellow = '#ffaf00';
const malwareRed = '#ff3e3e';
const vividPurple = '#9f00ff';
const aquamarine = '#2ee7b6';

const baseTheme = {
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	},
	typography: {
		fontFamily: 'Neue Haas Unica, sans-serif',
		h1: {
			fontWeight: 'bold'
		},
		h2: {
			fontWeight: 'bold'
		},
		h3: {
			fontWeight: 'bold'
		},
		body1: {
			fontFamily: 'Ab Zeitung Micro Pro, sans-serif',
			fontWeight: 'regular'
		},
		body2: {
			fontFamily: 'Ab Zeitung Mono Pro, sans-serif',
			fontWeight: 'regular'
		},
		subtitle1: {
			fontFamily: 'Neue Haas Unica, sans-serif',
			fontWeight: 'regular'
		},
		subtitle2: {
			fontFamily: 'Neue Haas Unica, sans-serif',
			fontWeight: 'bold'
		},
		button: {
			fontFamily: 'Ab Zeitung Mono Pro, sans-serif',
			fontWeight: 'semibold'
		}
	}
};

export const darkTheme = createTheme({
	palette: {
		primary: {
			main: htbGreen
		},
		secondary: {
			main: htbGrey
		},
		error: {
			main: malwareRed
		},
		warning: {
			main: nuggetYellow
		},
		info: {
			main: azure
		},
		success: {
			main: aquamarine
		},
		background: {
			default: nodeBlack,
			paper: nodeBlackLighter
		},
		text: {
			primary: htbGrey,
			secondary: nodeBlack
		}
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputLabel-root': {
						color: htbGrey
					}
				}
			}
		}
	},

	...baseTheme
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: green[600],
			contrastText: '#FFFFFF'
		},
		secondary: {
			main: orange[500],
			contrastText: '#FFFFFF'
		},
		background: {
			paper: '#F5F5F5',
			default: '#FFFFFF'
		},
		text: {
			primary: '#212121',
			secondary: '#757575'
		}
	},
	...baseTheme
});

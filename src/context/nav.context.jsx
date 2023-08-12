import {
	createContext,
	useContext,
	useReducer,
} from 'react';

// Create a context for toggling
const ToggleContext = createContext();

// Reducer function for toggling state
const reducer = (state, action) => {
	switch (action.type) {
		case ActionTypes.Active:
			return (state = true);
		case ActionTypes.InActive:
			return (state = false);
		default:
			return false;
	}
};

// Context provider for the mobile menu toggle
export const ToggleProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, false);

	return (
		<ToggleContext.Provider value={{ state, dispatch }}>
			{children}
		</ToggleContext.Provider>
	);
};

// Custom hook to get state and dispatcher from context
export const useToggle = () => {
	const context = useContext(ToggleContext);
	if (!context) {
		throw new Error(
			'useToggle must be used within a ToggleProvider'
		);
	}
	return context;
};

// Action types for toggling
export const ActionTypes = {
	Active: 'Active',
	InActive: 'InActive',
};

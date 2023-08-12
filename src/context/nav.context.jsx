import {
	createContext,
	useContext,
	useReducer,
} from 'react';

const ToggleContext = createContext();

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case ActionTypes.Active:
			return (state = true);
		case ActionTypes.InActive:
			return (state = false);
		default:
			return false;
	}
};

export const ToggleProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, false);

	return (
		<ToggleContext.Provider value={{ state, dispatch }}>
			{children}
		</ToggleContext.Provider>
	);
};

export const useToggle = () => {
	const context = useContext(ToggleContext);
	if (!context) {
		throw new Error(
			'useToggle must be used within a ToggleProvider'
		);
	}
	return context;
};

export const ActionTypes = {
	Active: 'Active',
	InActive: 'InActive',
};
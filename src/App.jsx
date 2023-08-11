import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { AssessmentCreator } from './components';
const router = createBrowserRouter([
	{
		path: '/',
		element: <AssessmentCreator />,
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

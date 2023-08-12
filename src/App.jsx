import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import {
	AssessmentRouter,
	// DashboardRouter,
} from './router';
import DashboardRouter from './router/dashboard/dashboard.router';
import { Navigation } from './components';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		children: [
			{
				path: '',
				element: <DashboardRouter text='Dashboard' />,
			},
			{
				path: 'assessment',
				element: <AssessmentRouter />,
			},
			{
				path: 'library',
				element: <DashboardRouter text='Library' />,
			},
			{
				path: 'status',
				element: <DashboardRouter text='Round Status' />,
			},
		],
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

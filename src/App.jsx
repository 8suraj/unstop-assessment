import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import {
	AssessmentRouter,
	DashboardRouter,
} from './router';
import { Navigation } from './components';
//using create browser router instead of browser router as it has enchance capabilities such as loader to pre load data
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

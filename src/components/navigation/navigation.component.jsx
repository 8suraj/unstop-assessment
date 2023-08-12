import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/side.component';
import { useToggle } from '../../context/nav.context';

// Navigation component
export default function Navigation() {
	// Get state and dispatch from the useToggle context
	const { state, dispatch } = useToggle();

	return (
		<>
			{/* Main container */}
			<div className='relative flex h-screen lg:flex-col w-full'>
				{/* Background overlay when sidebar is active */}
				{state && (
					<div className='fixed bg-black opacity-50 left-0 right-0 top-0 bottom-0 z-[15] ' />
				)}
				<SideBar onClose={() => dispatch} active={state} />

				{/* Outlet for displaying nested routes */}
				<Outlet />
			</div>
		</>
	);
}

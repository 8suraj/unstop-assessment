import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/side.component';
import { useToggle } from '../../context/nav.context';
export default function Navigation() {
	const { state, dispatch } = useToggle();
	return (
		<>
			<div className='relative flex  h-screen  lg:flex-col   w-full'>
				{state && (
					<div className=' fixed bg-black opacity-50 left-0 right-0 top-0 bottom-0 z-[15] ' />
				)}
				<SideBar onClose={() => dispatch} active={state} />

				<Outlet />
			</div>
		</>
	);
}

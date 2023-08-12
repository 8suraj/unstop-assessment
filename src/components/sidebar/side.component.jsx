import './sidebar.styles.scss';
import { NavLink } from 'react-router-dom';
import crossLogo from '../../assets/svgs/cross.svg';
import dashBoardLogo from '../../assets/svgs/dashboard.svg';
import assessmentLogo from '../../assets/svgs/assessment.svg';
import libraryLogo from '../../assets/svgs/library.svg';
import roundLogo from '../../assets/svgs/round.svg';
import { ActionTypes } from '../../context/nav.context';

// Sidebar component
export default function SideBar({ onClose, active }) {
	// Define classes for the sidebar based on the 'active' prop
	const sidebarClasses = active
		? 'transition w-10/12 bg-white h-screen absolute z-20'
		: 'hidden lg:block 2xl:w-40 lg:w-40 lg:fixed z-10 bg-white h-screen';

	return (
		<menu className={sidebarClasses}>
			{/* Sidebar header */}
			<div className='p-5 py-10'>
				<div className='flex justify-between h-9 2xl:hidden lg:hidden'>
					<div>Menu</div>
					<div
						onClick={onClose({
							type: ActionTypes.InActive,
						})}>
						<img src={crossLogo} alt='' />
					</div>
				</div>
				{/* Navigation links */}
				<NavLink
					className={({ isActive }) =>
						isActive
							? '  nav-styles  nav-active'
							: '  nav-styles  '
					}
					to=''>
					<div>
						<img src={dashBoardLogo} alt='' />
					</div>
					Dashboard
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? '  nav-styles  nav-active'
							: '  nav-styles   '
					}
					to='assessment'>
					<div>
						<img src={assessmentLogo} alt='' />
					</div>
					Assessment
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? '  nav-styles  nav-active'
							: '  nav-styles   '
					}
					to='library'>
					<div>
						<img src={libraryLogo} alt='' />
					</div>
					My Library
				</NavLink>
				{/* Divider */}
				<hr className='my-[10px] h-px border-1 border-[#BACBD5] border-dashed' />
				{/* Admin status link */}
				<NavLink
					className={({ isActive }) =>
						isActive
							? '  nav-styles  nav-active'
							: '  nav-styles   '
					}
					to='/status'>
					<div className='flex items-center gap-2 2xl:flex-col lg:flex-col lg:justify-center 2xl:justify-center lg:order-last text-center lg:gap-[6px]'>
						<img src={roundLogo} alt='' />
						Round Status
					</div>
					<div className='text-[.65rem] text-red-600 rounded-[22px] border-red-600 border px-2 bg-red-600/20 lg:order-1 2xl:order-1 lg:py'>
						Admin
					</div>
				</NavLink>
			</div>
		</menu>
	);
}

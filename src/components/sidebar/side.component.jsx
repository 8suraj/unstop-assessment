import './sidebar.styles.scss';
import crossLogo from '../../assets/svgs/cross.svg';
import dashBoardLogo from '../../assets/svgs/dashboard.svg';
import assessmentLogo from '../../assets/svgs/assessment.svg';
import libraryLogo from '../../assets/svgs/library.svg';
import roundLogo from '../../assets/svgs/round.svg';

export default function SideBar({ onClose, active }) {
	return (
		<>
			<menu
				className={`${
					active
						? 'transition w-10/12 bg-white  h-screen  absolute z-20'
						: 'hidden lg:block 2xl:w-40 lg:w-40 lg:fixed z-10 bg-white h-screen'
				}`}>
				<ul className='list-none p-5 py-10'>
					<li className='flex justify-between  h-9 2xl:hidden lg:hidden'>
						<div>Menu</div>
						<div onClick={() => onClose(false)}>
							<img src={crossLogo} alt='' />
						</div>
					</li>
					<li className='lg:py-[.65rem]   rounded-lg flex items-center gap-2 2xl:flex-col lg:flex-col '>
						<div>
							<img src={dashBoardLogo} alt='' />
						</div>
						Dashboard
					</li>
					<li className='lg:py-[.65rem]   rounded-lg flex items-center gap-2 2xl:flex-col lg:flex-col '>
						<div>
							<img src={assessmentLogo} alt='' />
						</div>
						Assessment
					</li>
					<li className='lg:py-[.65rem]   rounded-lg flex items-center gap-2 2xl:flex-col lg:flex-col  '>
						<div>
							<img src={libraryLogo} alt='' />
						</div>
						My Library
					</li>
					<hr className='my-[10px] h-px	 border-1 border-[#BACBD5] border-dashed	' />
					<li className='lg:py-[.65rem]   rounded-lg flex items-center justify-between 2xl:flex-col lg:flex-col lg:justify-center 2xl:justify-center  	  lg:px-5 lg:gap-[6px]'>
						<div className='flex items-center gap-2 2xl:flex-col  lg:flex-col lg:justify-center 2xl:justify-center lg:order-last text-center lg:gap-[6px] '>
							<img src={roundLogo} alt='' />
							Round Status
						</div>
						<div className='text-[.65rem] text-red-600 rounded-[22px]	border-red-600 border px-2 bg-red-600/20 lg:order-1	2xl:order-1	lg:py	'>
							Admin
						</div>
					</li>
				</ul>
			</menu>
		</>
	);
}

import { NavLink } from 'react-router-dom';
import humburgerLogo from '../assets/svgs/2.svg';
import Comp from '../assets/svgs/comp.svg';
import {
	SideBar,
	NewAssessment,
	Assessment,
	AssessmentCreator,
} from '../components';
import { useState } from 'react';
import searchIcon from '../assets/svgs/search.svg';
import filterIcon from '../assets/svgs/filter.svg';
import statIcon from '../assets/svgs/stat.svg';

export default function Index() {
	const [menu, setMenu] = useState(false);
	const [assessment, setAssessment] = useState(false);
	return (
		<>
			<div className='relative flex  h-screen w-full'>
				{(menu || assessment) && (
					<div className=' fixed bg-black opacity-50 left-0 right-0 top-0 bottom-0 lg:hidden ' />
				)}
				{menu && <SideBar onClose={setMenu} />}
				{assessment && (
					<AssessmentCreator onClose={setAssessment} />
				)}
				<div
					className={`${
						menu || assessment
							? 'overflow-hidden w-full'
							: 'w-full'
					}`}>
					<div className='w-full flex items-center px-4 text-base font-semibold py-4  '>
						<div className='flex items-center w-full gap-4'>
							<img
								src={humburgerLogo}
								alt=''
								className='cursor-pointer'
								onClick={() => setMenu(true)}
							/>
							Assessment
						</div>
						<div>
							<img src={Comp} alt='' />
						</div>
					</div>
					<nav className='border-b-2 border-[#F6F8FA] list-none flex items-center justify-center text-[.89rem] font-medium '>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'py-[.65rem] px-4 border-b-2 border-[#0073E6] text-[#0073E6] '
									: 'py-[.65rem] px-4  '
							}>
							My Assessments
						</NavLink>

						<NavLink
							to='asd'
							className={({ isActive }) =>
								isActive
									? 'py-[.65rem] px-4 border-b-2 border-[#0073E6] text-[#0073E6]'
									: 'py-[.65rem] px-4 '
							}>
							Unstop Assessments
						</NavLink>
					</nav>

					<div className='flex flex-col py-5 px-4 gap-4 '>
						<div className='flex justify-between items-center'>
							<div className='font-semibold text-base'>
								My Assessment
							</div>
							<div className='flex gap-5 items-center'>
								<div>
									<img src={searchIcon} alt='' />
								</div>
								<div>
									<img src={filterIcon} alt='' />
								</div>
								<div>
									<img src={statIcon} alt='' />
								</div>
							</div>
						</div>
						<NewAssessment setAssessment={setAssessment} />
						<Assessment />
						<Assessment />
						<Assessment />
						<Assessment />
					</div>
				</div>
			</div>
		</>
	);
}

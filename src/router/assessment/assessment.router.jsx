import { NavLink } from 'react-router-dom';
import humburgerLogo from '../../assets/svgs/2.svg';
import Comp from '../../assets/svgs/comp.svg';
import {
	NewAssessment,
	Assessment,
	Overview,
	AssessmentCreator,
} from '../../components';
import { useState } from 'react';
import searchIcon from '../../assets/svgs/search.svg';
import filterIcon from '../../assets/svgs/filter.svg';
import statIcon from '../../assets/svgs/stat.svg';
import { useToggle } from '../../context/nav.context';
import { ActionTypes } from '../../context/nav.context';

// Options for the select menu
const options = [
	{ value: 1, label: 'Practice' },
	{ value: 2, label: 'Mock' },
];

// Main component for handling Assessment Router
export default function AssessmentRouter() {
	const { state, dispatch } = useToggle();
	const [assessment, setAssessment] = useState(false);

	return (
		<>
			{assessment && (
				<div className=' fixed bg-black opacity-50 left-0 right-0 top-0 bottom-0 z-[15] ' />
			)}
			{/* Component to Create a Assessment */}
			<AssessmentCreator
				onClose={setAssessment}
				active={assessment}
				options={options}
			/>
			<div
				className='fixed rounded-full bg-[#0073E6] bottom-[15vh] right-[2vh] w-12 h-12 flex items-center justify-center lg:hidden'
				onClick={() => setAssessment(true)}>
				<div>
					<svg
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M23.3333 16.1905H16.1905V23.3333H13.8095V16.1905H6.66666V13.8095H13.8095V6.66666H16.1905V13.8095H23.3333V16.1905Z'
							fill='white'
						/>
					</svg>
				</div>
			</div>
			<div
				className={`w-full lg:w-[89%]  lg:ml-40 lg:px-4  ${
					state || assessment ? 'overflow-hidden ' : ''
				}`}>
				{/* Navigation Bar */}
				<div className='w-full flex items-center px-4 text-base font-semibold py-4 lg:hidden'>
					<div className='flex items-center w-full gap-4'>
						<img
							src={humburgerLogo}
							alt=''
							className='cursor-pointer'
							onClick={() =>
								dispatch({ type: ActionTypes.Active })
							}
						/>
						Assessment
					</div>
					<div>
						<img src={Comp} alt='' />
					</div>
				</div>
				{/* Navigation Tabs */}
				<div className='bg-white'>
					<nav className='w-full border-b-2 border-[#F6F8FA] list-none flex items-center justify-center text-[.89rem] font-medium lg:justify-start bg-white lg:box-border '>
						<NavLink
							to='assessment'
							className='hidden py-[.65rem] px-4  lg:block   text-xl font-semibold '>
							Assessments
						</NavLink>
						{/* Divider */}
						<div className='px-5 hidden lg:block'>
							<svg
								width='2'
								height='46'
								viewBox='0 0 2 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M1 0V46' stroke='#DADCE0' />
							</svg>
						</div>
						{/* Tabs */}
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'py-[.65rem] px-4 border-b-2 border-[#0073E6] text-[#0073E6] '
									: 'py-[.65rem] px-4  '
							}>
							My Assessments
						</NavLink>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? 'py-[.65rem] px-4 border-b-2 border-[#0073E6] text-[#0073E6]'
									: 'py-[.65rem] px-4 lg:hidden'
							}>
							Unstop Assessments
						</NavLink>
					</nav>
					{/* Overview Section */}
					<Overview />

					{/* Heading */}
					<h1 className='px-4 font-medium text-[1.15rem] hidden lg:block'>
						My Assessment
					</h1>
					{/* Assessment List */}
					<div className=' flex flex-col py-5 px-4 gap-4  lg:grid lg:grid-cols-3  lg:w-full lg:gap-[1.8rem] lg:p-5'>
						{/* Mobile Header */}
						<div className='flex justify-between items-center lg:hidden w-max-full'>
							<div className='font-semibold text-base '>
								My Assessment
							</div>
							{/* Icons */}
							<div className='flex gap-5 items-center '>
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
						{/* Components */}
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

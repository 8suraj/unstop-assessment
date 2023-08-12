import assessmentLogo from '../../assets/svgs/assessment1.svg';
import clockLogo from '../../assets/svgs/clock.svg';
import moreLogo from '../../assets/svgs/more.svg';
import clipLogo from '../../assets/svgs/clip.svg';
import calenderLogo from '../../assets/svgs/calender.svg';

// Component for the header section of the assessment
function AssessmentHeader() {
	return (
		<div className='flex items-center gap-[.65rem] lg:flex-col lg:items-start'>
			{/* Assessment logo */}
			<div>
				<img src={assessmentLogo} alt='' />
			</div>
			<div className='flex flex-col'>
				<div className='text-[#1C4980] text-[.9rem] font-semibold'>
					Math Assessment
				</div>
				<div className='flex divide-x-[.1rem] gap-[.3rem] items-center justify-center box-border py-1'>
					<div>Job</div>
					<div className='flex items-center justify-center px-[.15rem] gap-[.3rem] text-[#8DA4BF]'>
						<img
							src={clockLogo}
							alt=''
							className='lg:hidden'
						/>
						<img
							src={calenderLogo}
							alt=''
							className='hidden lg:block'
						/>
						20 Apr 23
					</div>
				</div>
			</div>
		</div>
	);
}

// Component for the footer section of the assessment
function AssessmentFooter() {
	return (
		<div className='flex items-center gap-1'>
			{/* Share button */}
			<div className='flex text-[.75rem] font-medium border border-[#1c4980] rounded-[3.1rem] px-1 py-[.1rem]'>
				<img src={clipLogo} alt='' />
				Share
			</div>

			{/* User tags */}
			<div className='relative max-w-[6rem] w-16 h-[1rem] z-10'>
				<div className='user-styles bg-[#E9407A] transform -translate-x-full -translate-y-1/4'>
					LP
				</div>
				<div className='user-styles bg-[#3079E1] -translate-x-2/4 -translate-y-1/4'>
					LP
				</div>
				<div className='user-styles bg-[#6548EE] transform -translate-y-1/4'>
					LP
				</div>
			</div>

			{/* Like count */}
			<div className='text-[.75rem] font-semibold'>
				+324
			</div>
		</div>
	);
}

// Main Assessment component
export default function Assessment() {
	return (
		<div className='flex flex-col border border-[#DADCE0] rounded-xl p-[.9rem]'>
			{/* Header */}
			<div className='flex justify-between w-full'>
				<AssessmentHeader />
				<div>
					<img src={moreLogo} alt='' />
				</div>
			</div>
			{/* Divider */}
			<hr className='my-[.65rem] h-px border-1 border-[#BACBD5] border-dashed' />
			{/* Footer */}
			<div className='w-full flex justify-between'>
				{/* Duration and Questions */}
				<div className='flex gap-[.65rem]'>
					<div className='flex flex-col'>
						<span className='text-[.75rem] font-semibold'>
							00
						</span>
						<span className='text-[.65rem] font-medium'>
							Duration
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-[.75rem] font-semibold'>
							00
						</span>
						<span className='text-[.65rem] font-medium'>
							Questions
						</span>
					</div>
				</div>
				{/* Footer section */}
				<AssessmentFooter />
			</div>
		</div>
	);
}

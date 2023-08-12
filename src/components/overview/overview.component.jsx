import equalLogo from '../../assets/svgs/equal.svg';
import userLogo from '../../assets/svgs/user.svg';
import mailLogo from '../../assets/svgs/email.svg';
import clipLogo from '../../assets/svgs/clip2.svg';

export default function Overview() {
	return (
		<div className='w-full p-5 lg:flex flex-col gap-4 hidden'>
			<div className='font-medium text-[1.15rem]'>
				Assessments Overview
			</div>
			<div className='flex divide-x-2 border border-[#DADCE0] rounded-xl'>
				<OverviewCard
					icon={equalLogo}
					label='Total Assessment'
					value='34'
				/>
				<CandidatesCard />
				<CandidatesSourceCard />
				<OverviewCard
					icon={clipLogo}
					label='Total Purpose'
					value='11'
				/>
			</div>
		</div>
	);
}

function OverviewCard({ icon, label, value }) {
	return (
		<div className='flex flex-col py-[1rem] px-5 gap-4 flex-auto'>
			<div className='text-[.89rem] font-semibold'>
				{label}
			</div>
			<div className='flex items-center gap-[.65rem]'>
				<div>
					<img src={icon} alt='' />
				</div>
				<div className='text-xl font-bold'>{value}</div>
			</div>
		</div>
	);
}

function CandidatesCard() {
	return (
		<div className='flex flex-col py-[1rem] px-5 gap-4 flex-auto'>
			<div className='text-[.89rem] font-semibold'>
				Candidates
			</div>
			<div className='flex items-center gap-[.65rem]'>
				<div>
					<img src={userLogo} alt='' />
				</div>
				<div className='flex divide-x'>
					<CandidatesStat
						value='11,145'
						change='+89'
						label='Total Candidate'
					/>
					<CandidatesStat
						value='1,14'
						change='+89'
						label='Who Attempted'
					/>
				</div>
			</div>
		</div>
	);
}

function CandidatesSourceCard() {
	return (
		<div className='flex flex-col py-[1rem] px-5 gap-4 flex-auto'>
			<div className='text-[.89rem] font-semibold'>
				Candidates Source
			</div>
			<div className='flex items-center gap-[.65rem]'>
				<div>
					<img src={mailLogo} alt='' />
				</div>
				<div className='flex divide-x'>
					<CandidatesStat
						value='11,00'
						change='+89'
						label='Email'
					/>
					<CandidatesStat
						value='145'
						change='+89'
						label='Social Share'
					/>
					<CandidatesStat
						value='145'
						change='+89'
						label='Unique Link'
					/>
				</div>
			</div>
		</div>
	);
}

function CandidatesStat({ value, change, label }) {
	return (
		<div className='flex flex-col px-[.65rem]'>
			<div className='flex items-center'>
				<div className='text-xl font-bold'>{value}</div>
				<div className='text-[#05C165] text-[.75rem]'>
					{change}
				</div>
			</div>
			<div className='text-[.75rem] font-medium'>
				{label}
			</div>
		</div>
	);
}

import equalLogo from '../../assets/svgs/equal.svg';
import userLogo from '../../assets/svgs/user.svg';
import mailLogo from '../../assets/svgs/email.svg';
import clipLogo from '../../assets/svgs/clip2.svg';
export default function Overview() {
	return (
		<div className='w-full p-5 flex flex-col gap-4'>
			<div className='font-medium text-[1.15rem] '>
				Assessments Overview
			</div>
			<div className='flex divide-x-2 border border-[#DADCE0] rounded-xl  '>
				<div className='flex flex-col py-[1rem] px-5 gap-4 shrink-0 flex-auto	'>
					<div className='text-[.89rem] font-semibold'>
						Total Assessment
					</div>
					<div className='flex items-center gap-[.65rem]'>
						<div>
							<img src={equalLogo} alt='' />
						</div>
						<div className='text-xl	font-bold'>34</div>
					</div>
				</div>
				<div className='flex flex-col py-[1rem] px-5 gap-4 flex-auto	'>
					<div className='text-[.89rem] font-semibold'>
						Candidates
					</div>
					<div className='flex items-center gap-[.65rem]'>
						<div>
							<img src={userLogo} alt='' />
						</div>
						<div className='flex divide-x '>
							<div className='flex flex-col px-[.65rem] '>
								<div className='flex items-center'>
									<div className='text-xl	font-bold'>
										11,145
									</div>
									<div className='text-[#05C165] text-[.75rem]'>
										+89
									</div>
								</div>
								<div className='text-[.75rem] font-medium'>
									Total Candidate
								</div>
							</div>
							<div className='flex flex-col px-[.65rem]'>
								<div className='flex items-center'>
									<div className='text-xl	font-bold'>
										1,14
									</div>
									<div className='text-[#05C165] text-[.75rem]'>
										+89
									</div>
								</div>
								<div className='text-[.75rem] font-medium'>
									Who Attemmpted
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col py-[1rem] px-5 gap-4 flex-auto	'>
					<div className='text-[.89rem] font-semibold'>
						Candidates Source
					</div>
					<div className='flex items-center gap-[.65rem]'>
						<div>
							<img src={mailLogo} alt='' />
						</div>
						<div className='flex divide-x '>
							<div className='flex flex-col px-[.65rem] '>
								<div className='flex items-center'>
									<div className='text-xl	font-bold'>
										11,00
									</div>
									<div className='text-[#05C165] text-[.75rem]'>
										+89
									</div>
								</div>
								<div className='text-[.75rem] font-medium'>
									Email
								</div>
							</div>
							<div className='flex flex-col px-[.65rem]'>
								<div className='flex items-center'>
									<div className='text-xl	font-bold'>
										145
									</div>
									<div className='text-[#05C165] text-[.75rem]'>
										+89
									</div>
								</div>
								<div className='text-[.75rem] font-medium'>
									Social Share
								</div>
							</div>
							<div className='flex flex-col px-[.65rem]'>
								<div className='flex items-center'>
									<div className='text-xl	font-bold'>
										145
									</div>
									<div className='text-[#05C165] text-[.75rem]'>
										+89
									</div>
								</div>
								<div className='text-[.75rem] font-medium'>
									Unique Link
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col py-[1rem] px-5 gap-4 shrink-0 flex-auto	'>
					<div className='text-[.89rem] font-semibold'>
						Total Purpose
					</div>
					<div className='flex items-center gap-[.65rem]'>
						<div>
							<img src={clipLogo} alt='' />
						</div>
						<div className='text-xl	font-bold'>11</div>
					</div>
				</div>
			</div>
		</div>
	);
}

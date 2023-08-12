import plusLogo from '../../assets/svgs/plus.svg';

// NewAssessment component
export default function NewAssessment({ setAssessment }) {
	return (
		<div
			// Styling for the new assessment container
			className='flex flex-col items-center border border-[#DADCE0] border-dashed rounded-xl px-[1.9rem] py-5 bg-[#F6F8FA] cursor-pointer '
			// Handle click event to set the assessment
			onClick={() => setAssessment(true)}>
			<div className='rounded-full bg-white w-[3.2rem] h-[3.2rem] flex items-center justify-center'>
				<img src={plusLogo} alt='' />
			</div>

			<div className='text-[.9rem] font-semibold'>
				New Assessment
			</div>

			<div className='text-[.75rem] font-medium flex flex-col items-center'>
				<span>
					From here you can add questions of multiple
				</span>
				<span>
					types like MCQs, subjective (text or paragraph)!
				</span>
			</div>
		</div>
	);
}

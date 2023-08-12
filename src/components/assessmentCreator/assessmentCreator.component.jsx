import crossLogo from '../../assets/svgs/crossRed.svg';
import {
	TextInput,
	SelectInput,
	InputWithDisplay,
} from '../input/input.component';
import Button from '../button/button.component';

// AssessmentCreator component
export default function AssessmentCreator({
	onClose,
	active,
	options,
}) {
	// Determine container classes based on 'active' prop
	const containerClasses = active
		? 'bg-white w-full flex flex-col rounded-t-xl absolute top-[25vh] h-[85vh] max-h-[75vh] z-20 transition2 lg:w-4/12 lg:top-[10vh] lg:h-fit lg:max-h-[90vh] lg:rounded-xl trs'
		: 'hidden';

	return (
		<>
			{/* Container for the assessment creator */}
			<div className={containerClasses}>
				<div className='flex justify-between border-b border-[#DADCE0] bg-white rounded-t-xl items-center p-4 py-2'>
					<div className='font-semibold text-xl'>
						Create new assessment
					</div>
					<div
						className='rounded-full bg-red-100 w-10 h-10 flex items-center justify-center cursor-pointer'
						onClick={() => onClose(false)}>
						<img src={crossLogo} alt='' />
					</div>
				</div>
				<div className='flex flex-col p-4 overflow-y-auto font-medium text-base'>
					<TextInput label='Name of assessment' required />
					<SelectInput
						options={options}
						label='Purpose of the test is'
					/>
					<SelectInput
						options={options}
						label='Description'
					/>
					<InputWithDisplay
						label='Skills'
						renderTags={[
							'UI/UX and Design',
							'WebDev Skill',
						]}
					/>
					<TextInput
						label='Duration of assessment'
						placeHolder='HH:MM:SS'
						type='text'
						required
					/>
				</div>
				<div className='bg-white p-2 lg:rounded-b-xl bs'>
					<Button />
				</div>
			</div>
		</>
	);
}

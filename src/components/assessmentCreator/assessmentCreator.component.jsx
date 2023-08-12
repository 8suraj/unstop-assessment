import crossLogo from '../../assets/svgs/crossRed.svg';
import {
	TextInput,
	SelectInput,
	InputWithDisplay,
} from '../input/input.component';
import Button from '../button/button.component';

export default function AssessmentCreator({
	onClose,
	active,
	options,
}) {
	const containerClasses = active
		? 'bg-white w-full flex flex-col rounded-t-xl absolute top-[25vh] max-h-[75vh] z-20 transition2 lg:w-4/12 lg:top-[5vh] lg:h-[90vh] lg:max-h-[90vh] lg:rounded-xl trs'
		: 'hidden';

	return (
		<>
			<div className={containerClasses}>
				<div className='flex justify-between border-b border-[#DADCE0] bg-white rounded-t-xl items-center p-4 py-2'>
					<div>Sub-Section Details</div>
					<div
						className='rounded-full bg-red-100 w-10 h-10 flex items-center justify-center'
						onClick={() => onClose(false)}>
						<img src={crossLogo} alt='' />
					</div>
				</div>
				<div className='flex flex-col p-4 overflow-y-auto'>
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
					<TextInput label='Name of assessment' required />
				</div>
				<div className='bg-white p-2 lg:rounded-b-xl'>
					<Button />
				</div>
			</div>
		</>
	);
}

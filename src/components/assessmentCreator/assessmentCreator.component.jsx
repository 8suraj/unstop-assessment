import crossLogo from '../../assets/svgs/crossRed.svg';
import {
	TextInput,
	SelectInput,
	InputWithDisplay,
} from '../input/input.component';
import Button from '../button/button.component';
const options = [
	{ value: 1, label: 'Practice' },
	{ value: 2, label: 'Mock' },
];
export default function AssessmentCreator({ onClose }) {
	return (
		<>
			<div className='bg-white w-full flex flex-col rounded-t-xl absolute top-[25vh]  max-h-[75vh]	z-0 transition2'>
				<div className='  flex justify-between border-b border-[#DADCE0] bg-white  rounded-t-xl items-center  p-4 py-2  fixed  top-0 left-0 right-0 z-10 '>
					<div>Sub-Section Details</div>
					<div
						className='rounded-full bg-red-100 w-10 h-10 flex items-center justify-center'
						onClick={() => onClose(false)}>
						<img src={crossLogo} alt='' />
					</div>
				</div>
				<div className='flex flex-col p-4 mt-10 mb-10 overflow-y-auto'>
					<TextInput label='Name of assessment' required />
					<SelectInput
						options={options}
						label='Purpose of the test is'
					/>
					<SelectInput
						options={options}
						label='Description'
					/>
					<InputWithDisplay label='Skills' />
					<TextInput label='Name of assessment' required />
				</div>
				<div className='fixed bottom-0 left-0 right-0 bg-white p-4'>
					<Button />
				</div>
			</div>
		</>
	);
}

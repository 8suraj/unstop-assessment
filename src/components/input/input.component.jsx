import crossLogo from '../../assets/svgs/cross.svg';
export function TextInput({
	label = '',
	name = '',
	onChange = null,
	placeHolder = 'Type Here',
	required,
	error,
}) {
	return (
		<div className='flex flex-col p-1'>
			<label htmlFor={name}>{label}</label>
			<input
				type='text'
				name={name}
				required={required}
				// value={value}
				onChange={onChange}
				placeholder={placeHolder}
				className='border border-[#DADCE0] rounded-lg p-4 mt-1 focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-500 hover:border-violet-400 transition-colors'
			/>
			{error && (
				<div className='text-center text-red-500 capitalize'>
					error
				</div>
			)}
		</div>
	);
}

export function SelectInput({
	label,
	options = [],
	value,
	onChange,
}) {
	return (
		<div className='flex flex-col p-1 '>
			<label
				htmlFor='select-input'
				className='block text-gray-700'>
				{label}
			</label>

			<select
				id='select-input'
				name='select-input'
				value={value}
				onChange={onChange}
				className='border border-[#DADCE0] text-[#8DA4BF] rounded-lg p-4 mt-1 focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-500 hover:border-violet-400 transition-colors'>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

export function InputWithDisplay({
	label = 1,
	name = 1,
	value = 1,
	onChange = null,
	placeHolder = 'Type Here',
	required,
	error,
}) {
	return (
		<div className='flex flex-col p-1'>
			<label htmlFor={name}>{label}</label>
			<div className='border border-[#DADCE0] rounded-t-lg border-b-0	flex flex-wrap p-4'>
				<div className='flex rounded-full  bg-[#DDEDFF] p-1 px-2 m-1 text-[.75rem]'>
					UI/UX and Design <img src={crossLogo} alt='' />
				</div>
				<div className='flex rounded-full  bg-[#DDEDFF] p-1 px-2 m-1 text-[.75rem]'>
					UI/UX and Design <img src={crossLogo} alt='' />
				</div>
				<div className='flex rounded-full  bg-[#DDEDFF] p-1 px-2 m-1 text-[.75rem]'>
					UI/UX and Design <img src={crossLogo} alt='' />
				</div>
				<div className='flex rounded-full  bg-[#DDEDFF] p-1 px-2 m-1 text-[.75rem]'>
					UI/UX and Design <img src={crossLogo} alt='' />
				</div>
				{/* <div className='flex rounded-full  bg-[#DDEDFF] p-1 px-2 m-1 text-[.75rem]'>
					UI/UX and Design <img src={crossLogo} alt='' />
				</div>
				<div className='flex rounded-full  bg-[#DDEDFF] p-1 px-2 m-1 text-[.75rem]'>
					UI/UX and Design <img src={crossLogo} alt='' />
				</div> */}
			</div>
			<input
				type='text'
				name={name}
				required={required}
				// value={value}
				onChange={onChange}
				placeholder={placeHolder}
				className='border border-[#DADCE0] rounded-b-lg p-4  focus:outline-none focus:ring focus:ring-violet-300 focus:border-violet-500 hover:border-violet-400 transition-colors'
			/>
			{error && (
				<div className='text-center text-red-500 capitalize'>
					error
				</div>
			)}
		</div>
	);
}

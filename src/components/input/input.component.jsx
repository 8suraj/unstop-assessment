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
				onChange={onChange}
				placeholder={placeHolder}
				className='rounded-lg mt-1 input-styles'
			/>
			{error && <div className='error-styles'>{error}</div>}
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
				className='label-styles'>
				{label}
			</label>
			<select
				id='select-input'
				name='select-input'
				value={value}
				onChange={onChange}
				className='rounded-lg mt-1 text-[#8DA4BF] input-styles'>
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
	label = '',
	name = '',
	onChange = null,
	placeHolder = 'Type Here',
	required,
	error,
	renderTags,
}) {
	return (
		<div className='flex flex-col p-1'>
			<label htmlFor={name}>{label}</label>
			<div className='border border-[#DADCE0] rounded-t-lg border-b-0 flex flex-wrap p-4'>
				{renderTags && renderTag(renderTags)}
			</div>
			<input
				type='text'
				name={name}
				required={required}
				onChange={onChange}
				placeholder={placeHolder}
				className={`input-styles rounded-b-lg`}
			/>
			{error && <div className='error-styles'>{error}</div>}
		</div>
	);
}

function renderTag(tags) {
	return tags.map((tag, index) => (
		<div key={index} className='tag-styles'>
			{tag} <img src={crossLogo} alt='' />
		</div>
	));
}

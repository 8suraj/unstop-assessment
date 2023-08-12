import crossLogo from '../../assets/svgs/cross.svg';

// TextInput component for single-line text input
export function TextInput({
	label = '',
	name = '',
	type = 'text',
	onChange = null,
	placeHolder = 'Type Here',
	required,
	error,
}) {
	return (
		<div className='flex flex-col p-1'>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				required={required}
				onChange={onChange}
				placeholder={placeHolder}
				className='rounded-lg mt-1 input-styles'
			/>
			{/* Display error if provided */}
			{error && <div className='error-styles'>{error}</div>}
		</div>
	);
}

// SelectInput component for dropdown select input
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
				{/* Mapping over options to generate dropdown items */}
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

// InputWithDisplay component for input with tags display
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
				{/* Using renderTag function to render tags */}
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
			{/* Display error if provided */}
			{error && <div className='error-styles'>{error}</div>}
		</div>
	);
}

// Helper function to render tags
function renderTag(tags) {
	return tags.map((tag, index) => (
		<div key={index} className='tag-styles'>
			{tag}
			<img src={crossLogo} alt='' />{' '}
		</div>
	));
}

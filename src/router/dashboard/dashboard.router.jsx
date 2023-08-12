import humburgerLogo from '../../assets/svgs/2.svg';
import { useToggle } from '../../context/nav.context';
import { ActionTypes } from '../../context/nav.context';
import Comp from '../../assets/svgs/comp.svg';

// just a demo page
export default function DashboardRouter({ text }) {
	const { dispatch } = useToggle();
	return (
		<div className='w-full text-center font-semibold text-3xl'>
			<div className='w-full flex items-center px-4 text-base font-semibold py-4 lg:hidden  '>
				<div className='flex items-center w-full gap-4'>
					<img
						src={humburgerLogo}
						alt=''
						className='cursor-pointer'
						onClick={() =>
							dispatch({ type: ActionTypes.Active })
						}
					/>
					Assessment
				</div>
				<div>
					<img src={Comp} alt='' />
				</div>
			</div>
			{`This is ${text}`}
		</div>
	);
}
